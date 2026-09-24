import ChatHeader from "./ChatHeader.jsx";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";

function ChatWindow({ chat, onSend }) {
    return (
        <main className="chat-window">
            <ChatHeader chatName={chat.name} />
            <MessageList messages={chat.messages} />
            <MessageInput onSend={onSend} />
        </main>
    )
}

export default ChatWindow