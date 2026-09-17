import {useState} from 'react'
import './App.css'
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Привет!', type: 'received' },
        { id: 2, text: 'Как дела?', type: 'sent' },
        { id: 3, text: 'Норм а у тебя?', type: 'received' },
    ])

    return (
        <div className="app">
            <Sidebar/>
            <ChatWindow messages={messages}/>
        </div>
    )
}

export default App