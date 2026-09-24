function ChatHeader({ chatName }) {
    return (
        <header className="chat-header">
            <h3 id="chat-title">{chatName}</h3>
        </header>
    )
}

export default ChatHeader