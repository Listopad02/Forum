import './Layout.css'
import Header from "../../components/Header/Header"

const Layout = props => {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout