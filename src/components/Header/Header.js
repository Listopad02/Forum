import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="header-wrapper">
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu-item"><NavLink to="/" className="header-menu-link">Общение</NavLink></li>
                        <li className="header-menu-item"><NavLink to="/" className="header-menu-link">Политика</NavLink></li>
                        <li className="header-menu-item"><NavLink to="/" className="header-menu-link">Природа</NavLink></li>
                    </ul>
                </nav>
                <div className="input-group search">
                    <input type="search" className="search-input" placeholder="Поиск по сайту" />
                </div>
                <NavLink to="/" className="menu-toggle" id="menu-toggle"></NavLink>
            </div>
        </div>
    )
}

export default Header