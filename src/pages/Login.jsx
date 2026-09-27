import {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Login({onLogin}) {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    function handleLogin() {
        if (!name.trim()) return
        onLogin(name)
        navigate('/chat')
    }

    return (
        <div className={"login-page"}>
            <h1>Вход в мессенджер</h1>
            <input
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(eve) => setName(eve.target.value)}
                onKeyDown={(eve) => {
                    if (eve.key === 'Enter') handleLogin()
                }}
            />
            <button onClick={handleLogin}>Войти</button>
        </div>
    )
}

export default Login