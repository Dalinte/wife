import './Chat.scss'
import {Message} from "./Message";
import {useEffect, useMemo, useRef, useState} from "react";
import {
    ChatCompletionResponseMessage,
    useCreateChatCompletionMutation
} from "../../shared/api/query";
import {LOCALSTORAGE_OPENAI_API_KEY} from "../../shared/consts/global.consts";
import {functions, messageInsertKey, systemSettingsMessage} from "./consts/chat.consts";

import {chatEmotionsToModel} from "./consts/chatEmotionsToModel";
import {animationsNames} from "../../shared/animationsNames";
import {animationsStore} from "../../app/modules/animations";

function Chat() {
    const [sendMessage, {isLoading, data, error}] = useCreateChatCompletionMutation()
    const [messageList, setMessageList] = useState<ChatCompletionResponseMessage[]>([])
    const [inputText, setInputText] = useState('')
    const [hasKey, setHasKey] = useState(!!localStorage.getItem(LOCALSTORAGE_OPENAI_API_KEY))
    const messagesEndRef = useRef(null)
    const [inaction, setInaction] = useState(false)
    const [animationWeights, addEmotion, enableOneAnimation, enableStartedAnimations] = animationsStore((state) => [
        state.addAnimationWeight,
        state.addEmotion,
        state.enableOneAnimation,
        state.enableStartedAnimations
    ])

    function getCurrentEmotion(emotion: "embarrassment" | "smile" | 'neutrality' | 'sadness') {
        const emotionName = chatEmotionsToModel?.[emotion] || 'neutrality'
        addEmotion(emotionName, 1)
        addEmotion(chatEmotionsToModel[animationsNames.blinking], 1)
    }

    useEffect(() => {
        if (isLoading) {
            enableOneAnimation(animationsNames.typing, 1)
        } else {
            enableStartedAnimations(animationsNames.typing, 0)
        }
    }, [isLoading])

    useEffect(
        () => {
            let timer = setInterval(() => {
                console.log('Бейздействие')
                setMessageList((prevState) => [...prevState, {
                    content: "You need to come up with a message or question for the interlocutor who hasn't written anything in a long time.",
                    role: "assistant"
                }])
            }, Math.random() * 240000 + 60000);
            return () => {
                clearInterval(timer);
            };
        },
        [messageList.length]
    );

    const messageListForUser = useMemo(() => {
        return messageList.filter(item => ['user', 'assistant'].includes(item.role) && item.content !== null)
    }, [messageList.length])

    const sendMessageWithMessageList = (messages: ChatCompletionResponseMessage[]) => {
        return sendMessage({
            createChatCompletionRequest: {
                model: 'gpt-3.5-turbo',
                messages,
                functions,
                function_call: 'auto',
                max_tokens: 200
            }
        })
    }

    useEffect(() => {
        if (error?.status) {
            alert(error?.status)
        }
    }, [error])

    useEffect(() => {
        if (data?.id) {
            const message = data?.choices?.[0]?.message
            if (message?.function_call) {
                const availableFunctions = {
                    get_current_emotion: getCurrentEmotion,
                };
                const functionName = message.function_call.name;
                const functionToCall = availableFunctions[functionName];
                const functionArgs = JSON.parse(message.function_call.arguments);
                functionToCall(functionArgs.emotion);

                setMessageList((prevState) => [...prevState, message, {
                    "role": "function",
                    "name": functionName,
                    "content": `Aoi displayed emotion ${functionArgs.emotion || 'neutrality'} on her face`,
                }])

                sendMessageWithMessageList([...messageList, message, {
                    "role": "function",
                    "name": functionName,
                    "content": `Aoi displayed emotion ${functionArgs.emotion || 'neutrality'} on her face`,
                }])
            } else {
                setMessageList((prevState) => [...prevState, {
                    content: data.choices[0].message.content,
                    role: data.choices[0].message.role,
                }])
            }
        }
    }, [data?.id])

    useEffect(() => {
        messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messageList.length])

    const handleClickSendMessage = () => {
        if (hasKey) {
            setInputText('')

            setMessageList((prevState) => [...prevState, {
                content: inputText,
                role: "user"
            }])

            sendMessageWithMessageList([
                ...messageList,
                {
                    role: 'user',
                    content: inputText
                }
            ])
        } else {
            setMessageList([])
            localStorage.setItem(LOCALSTORAGE_OPENAI_API_KEY, inputText)
            setInputText('')
            setHasKey(true)
        }
    }

    useEffect(() => {
        if (!hasKey) {
            setMessageList([
                {
                    role: 'assistant',
                    content: messageInsertKey
                }
            ])
        }

        if (hasKey) {
            setMessageList([{
                role: 'system',
                content: systemSettingsMessage
            }])
        }
    }, [hasKey])

    return (
        <div className="chat">
            {/* Prompt Messages Container - Modify the height according to your need */}
            <div className="flex h-[50vh] md:h-[100vh] w-full flex-col">
                {/* Prompt Messages */}
                <div
                    className="flex-1 overflow-y-auto bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
                >
                    {messageList.map(({content, role, function_call, name}, index) => (
                        <Message key={index} role={role}>
                            <div className='flex flex-col'>
                                <span className='underline text-rose-600 decoration-sky-500'>Роль: </span>
                                <span>{role} </span>
                                <span className='underline text-rose-600 decoration-sky-500'>Контент:</span>
                                <span>{content}</span>
                                {
                                    function_call && (
                                        <>
                                            <span className='underline text-rose-600 decoration-sky-500'>Функциональный вызов:</span>
                                            <span>{function_call?.name}: { function_call?.arguments}</span>
                                        </>
                                    )
                                }
                                {
                                    name && (
                                        <>
                                            <span className='underline text-rose-600 decoration-sky-500'>Name:</span>
                                            <span>{name}</span>
                                        </>
                                    )
                                }
                            </div>
                        </Message>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Prompt message input */}
                <div
                    className="flex w-full items-center border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
                >
                    <label htmlFor="chat" className="sr-only">Enter your prompt</label>
                    <input
                        id="chat-input"
                        rows="1"
                        className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
                        placeholder="Start chatting with wife"
                        value={inputText}
                        disabled={isLoading}
                        onChange={(e) => {
                            setInputText(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleClickSendMessage()
                            }
                        }}
                    ></input>
                    <div>
                        <button
                            className="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
                            type="submit"
                            onClick={handleClickSendMessage}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 14l11 -11"></path>
                                <path
                                    d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
                                ></path>
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
