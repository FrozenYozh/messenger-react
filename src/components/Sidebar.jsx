function Sidebar({ chats, currentChatId, onSelectChat }) {
    return (
        <aside className="sidebar">
            <h2>Диалоги</h2>
            <ul>
                {chats.map(chat => (
                    <li
                        key={chat.id}
                        className={chat.id === currentChatId ? 'active' : ''}
                        onClick={() => onSelectChat(chat.id)}
                    >
                        {chat.name}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar