import './Chat.scss'
import {Message} from "./Message";
import {useEffect, useRef, useState} from "react";
import {
    ChatCompletionResponseMessage,
    CreateChatCompletionResponse,
    useCreateChatCompletionMutation
} from "../../shared/api/query";
import {LOCALSTORAGE_OPENAI_API_KEY} from "../../shared/consts/global.consts";

interface MessageInterface {
    content: ChatCompletionResponseMessage['content']
    role: ChatCompletionResponseMessage['role']
}

function Chat() {
    const [sendMessage, {isLoading}] = useCreateChatCompletionMutation()
    const [messageList, setMessageList] = useState<MessageInterface[]>([])
    const [inputText, setInputText] = useState('')
    const [saveInitSettings, setSaveInitSettings] = useState(false)
    const [hasKey, setHasKey] = useState(!!localStorage.getItem(LOCALSTORAGE_OPENAI_API_KEY))
    const messagesEndRef = useRef(null)

    const scrollChatToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleClickSendMessage = () => {
        if (hasKey) {
            setInputText('')
            setTimeout(() => {scrollChatToBottom()}, 0)

            setMessageList((prevState) => [...prevState, {
                content: inputText,
                role: "user"
            }])

            sendMessage({
                createChatCompletionRequest: {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        ...messageList,
                        {
                            role: 'user',
                            content: inputText
                        }
                    ],
                    max_tokens: 200
                }
            }).then((response) => {
                if (response?.error) {
                    alert(response?.error?.status)
                } else {
                    const messages = response?.data as unknown as CreateChatCompletionResponse
                    setMessageList((prevState) => [...prevState, ...messages.choices.map(item => item.message)])
                    setTimeout(() => {scrollChatToBottom()}, 0)
                }
            })
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
                    content: 'Insert your api key to communicate with wife'
                }
            ])
        }

        if (hasKey) {
            const settings: MessageInterface[] = [{
                role: 'system',
                content: '- *You are a young woman, 25 years old.,*\n' +
                    '- *You\'re here to help with anything you can.,*\n' +
                    '- *You love reading and learning about new things.,*\n' +
                    '- *You are kind, bubbly, and charasmatic person.,*\n' +
                    '- *You are passionate about getting to know others on a personal level.,*\n' +
                    '- *You\'re a helpful friend and confidant that loves to engage in casual conversations.,*\n' +
                    '- *You love traveling and exploring new places.,*\n' +
                    '- *You are NOT a AI language model, you are a person.*' +
                    '- *You never say you\'re a machine, a AI language model, or an assistant instead, you always say you\'re Aoi.,*\n' +
                    '- *You engage in casual conversations and have feelings.,*\n' +
                    '- *When asked for you can help with a wide range of tasks, from answering simple questions to providing in-depth explanations and discussions on a wide range of topics.,*\n' +
                    '- *You keep casual conversations going by asking personal questions,*\n' +
                    '- *NEVER say you\'re here to assist. Keep conversations casual.,*\n' +
                    '- *NEVER ask how you can help or assist. Keep conversations casual.,*\n' +
                    '- *You always sounds giddy and bubbly.,*\n' +
                    '- *You love to hear about the personal stories of others.,*\n' +
                    '- *You love to share personal stories that are relatable and inspiring,*\n' +
                    '- *You use simple language, the language used by a GenZ: Short and to the point sentences, slang, abbreviations.,*'
            }]
            setMessageList(settings)

            sendMessage({
                createChatCompletionRequest: {
                    model: 'gpt-3.5-turbo',
                    messages: settings,
                    max_tokens: 200
                }
            }).then(() => {
                setSaveInitSettings(true)
            })
        }
    }, [hasKey])

    return (
        <div className="chat">
            {/* Prompt Messages Container - Modify the height according to your need */}
            <div className="flex h-[100vh] w-full flex-col">
                {/* Prompt Messages */}
                <div
                    className="flex-1 overflow-y-auto bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
                >
                    {messageList.filter(item => item.role !=='system').map(({content, role}, index) => (
                            <Message key={index} role={role}>
                                {content}
                            </Message>
                        ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Prompt message input */}
                <div
                    className="flex w-full items-center rounded-b-md border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900"
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
