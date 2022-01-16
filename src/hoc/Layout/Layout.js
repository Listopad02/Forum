import './Layout.css'
import Header from "../../components/Header/Header"
import Auth from '../../components/Auth/Auth'

const Layout = props => {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <div className="content">
                <main className='posts'>
                    { props.children }
                </main>
                <Auth />
            </div>
        </div>
    )
}

export default Layout