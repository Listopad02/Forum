import "./Auth.css"
import { NavLink } from 'react-router-dom'

function Auth() {
    return (
        <aside className="sidebar">
            <div className="login">
                <form className="login-form">
                    <h2 className="login-title">Авторизация</h2>
                    <input type="email" className="login-input login-email" name="email" 
                        minlength="6" required placeholder="email" />
                    <input type="password" className="login-input login-password" name="password" 
                        minlength="6" required placeholder="пароль" />
                    <NavLink to="/" className="login-forget">Забыли пароль?</NavLink>
                    <button type="submit" className="login-signin">Войти</button>
                    <NavLink to="/" className="login-signup">Регистрация</NavLink>
                </form>
            </div>
        </aside>
    )
}

export default Auth;