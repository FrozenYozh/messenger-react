import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Chat from './pages/Chat'

function App() {
    const [userName, setUserName] = useState('')
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
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login onLogin={setUserName}/>}
                />
                <Route
                    path="/chat"
                    element={
                        userName ? (
                            <Chat
                                chats={chats}
                                currentChatId={currentChatId}
                                onSelectChat={setCurrentChatId}
                                currentChat={currentChat}
                                onSend={addMessage}
                            />
                        ) : (
                            <Navigate to="/login"/>
                        )
                    }
                />
                <Route
                    path="*"
                    element={<Navigate to="/login"/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App