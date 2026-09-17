function ChatWindow({ messages }) {
    return (
        <main className="chat-window">
            <header className="chat-header">
                <h3 id="chat-title">Анна</h3>
            </header>

            <div className="messages" id="messages-container">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <footer className="message-input-area">
                <input type="text" id="message-input" placeholder="Введите сообщение..." />
                <button id="send-button">Отправить</button>
            </footer>
        </main>
    )
}

export default ChatWindow