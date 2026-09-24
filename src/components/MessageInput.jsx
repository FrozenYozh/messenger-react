import { useState } from 'react'

function MessagesInput({ onSend }) {
    const [inputValue, setInputValue] = useState('')

    function handleSend() {
        if (!inputValue.trim()) return
        onSend(inputValue)
        setInputValue('')
    }

    return (
        <footer className="message-input-area">
            <input
                type="text"
                id="message-input"
                placeholder="Введите сообщение..."
                value={inputValue}
                onChange={(eve) => setInputValue(eve.target.value)}
                onKeyDown={(eve) => {
                    if (eve.key === 'Enter') handleSend()
                }}
            />
            <button id="send-button" onClick={handleSend}>Отправить</button>
        </footer>
    )
}

export default MessagesInput