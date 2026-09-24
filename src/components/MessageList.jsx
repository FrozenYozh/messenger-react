import { useEffect, useRef } from 'react'

function MessageList({ messages }) {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView( { behavior: 'auto' })
    }, [messages])

    return (
        <div className="messages" id="messages-container">
            {messages.map(msg => (
                <div key={msg.id} className={`message ${msg.type}`}>
                    {msg.text}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessageList