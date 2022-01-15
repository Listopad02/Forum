import './Layout.css'
import Header from "../../components/Header/Header"
import Auth from '../../components/Auth/Auth'
import NewPost from '../../components/NewPost/NewPost'

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
                <NewPost />
            </div>
        </div>
    )
}

export default Layout