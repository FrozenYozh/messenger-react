import {useState, useEffect} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {

    const [chats, setChats] = useState(() => {

        const saved = localStorage.getItem('messenger_chats')

        if (saved) {
            try {
                return JSON.parse(saved)
            } catch
                (warning) {
                console.warn('Ошибка загрузки: ', warning)
            }
        }

        return [
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
        ]
    })

    const [currentChatId, setCurrentChatId] = useState(1);

    const currentChat = chats.find(chat => chat.id === currentChatId);

    useEffect(() => {
        localStorage.setItem('messenger_chats', JSON.stringify(chats))
    }, [chats])

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