import {PropsWithChildren} from 'react'
import {ChatCompletionResponseMessage} from "../../shared/api/query";

interface MessageProps {
    role?: ChatCompletionResponseMessage['role']
}

export const Message = ({role = 'user', children}: PropsWithChildren<MessageProps>) => {
    return (
        <div className={`flex px-4 py-8 sm:px-6 ${role !== 'user' && 'bg-slate-100 dark:bg-slate-900'}`}>
            <img
                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                src={role === "assistant" ? 'https://dummyimage.com/256x256/363536/ffffff&text=W' : 'https://dummyimage.com/256x256/354ea1/ffffff&text=U'}
            />

            <div className="flex max-w-3xl items-center">
                <p className={role === 'assistant' ? 'max-w-3xl' : ''}>{children}</p>
            </div>
        </div>
    )
}