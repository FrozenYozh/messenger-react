import {useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {

    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Анна',
            messages: [
                {id: 1, text: 'Привет!', type: 'received'},
                {id: 2, text: 'Привет! Как дела?', type: 'sent'},
            ]
        },
        {
            id: 2,
            name: 'Максим',
            messages: [
                {id: 3, text: 'Йоу!', type: 'received'},
            ]
        },
        {
            id: 3,
            name: 'Команда',
            messages: []
        }
    ])

    const [currentChatId, setCurrentChatId] = useState(1);

    const currentChat = chats.find(chat => chat.id === currentChatId);

    function addMessage(text) {
        const newMessage = {
            id: Date.now(),
            text: text,
            type: 'sent'
        }

        setChats(prevChats =>
            prevChats.map(chat => chat.id === currentChatId
                ? {...chat, messages: [...chat.messages, newMessage]}
                : chat
            )
        )

        setTimeout(() => {
            setChats(prevChats =>
                prevChats.map(chat => chat.id === currentChatId
                    ? {
                        ...chat,
                        messages: [
                            ...chat.messages,
                            {
                                id: Date.now() + 1, text: 'Это автоматический ответ', type: 'received'
                            }
                        ]
                    }
                    : chat
                )
            )
        }, 1000)
    }

    return (
        <div className="app">
            <Sidebar
                chats={chats}
                currentChatId={currentChatId}
                onSelectChat={setCurrentChatId}
            />
            <ChatWindow
                chat={currentChat}
                onSend={addMessage}
            />
        </div>
    )
}

export default App