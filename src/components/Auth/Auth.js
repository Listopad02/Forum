import "./Auth.css"
import { NavLink } from 'react-router-dom'

function Auth() {
    return (
        <div class="login">
            <form class="login-form">
                <h2 class="login-title">Авторизация</h2>
                <input type="email" class="login-input login-email" name="email" 
                    minlength="6" required placeholder="email" />
                <input type="password" class="login-input login-password" name="password" 
                    minlength="6" required placeholder="пароль" />
                <NavLink to="/" class="login-forget">Забыли пароль?</NavLink>
                <button type="submit" class="login-signin">Войти</button>
                <NavLink to="/" class="login-signup">Регистрация</NavLink>
            </form>
        </div>
    )
}

export default Auth;