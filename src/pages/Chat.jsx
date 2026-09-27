import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'

function Chat({ chats, currentChatId, onSelectChat, currentChat, onSend }) {
    return (
        <div className="app">
            <Sidebar
                chats={chats}
                currenctChatId={currentChatId}
                onSelectChat={onSelectChat}
            />
            <ChatWindow
                chat={currentChat}
                onSend={onSend}
            />
        </div>
    )
}

export default Chat