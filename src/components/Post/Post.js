import { NavLink } from 'react-router-dom'
import "./Post.css"

function Post() {
    return (
        <section className="post">
            <div className="post-body">
                <h2 className="post-title">Заголовлок поста</h2>
                <p className="post-text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись емубукв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!</p>
                <div className="tags">
                    <NavLink to="/" className="tag">#свежее</NavLink>
                </div>
            </div>
            <div className="post-footer">
                <div className="post-buttons">
                    <button className="post-button likes">
                        {/* <svg width="19" height="20" className="icon icon-like">
                            <use xlink:href="img/icons.svg#like"></use>
                        </svg> */}
                        <span className="likes-counter">26</span>
                    </button>
                    <button className="post-button comments">
                        {/* <svg width="21" height="21" className="icon icon-comment">
                            <use xlink:href="img/icons.svg#comment"></use>
                        </svg> */}
                        <span className="comments-counter">157</span>
                    </button>
                    <button className="post-button save">
                        {/* <svg width="19" height="19" class="icon icon-save">
                            <use xlink:href="img/icons.svg#save"></use>
                        </svg> */}
                    </button>
                    <button class="post-button share">
                        {/* <svg width="17" height="19" className="icon icon-share">
                            <use xlink:href="img/icons.svg#share"></use>
                        </svg> */}
                    </button>
                </div>
                <div className="post-author">
                    <div className="author-about">
                        <NavLink to="/" className="author-username">pinkepay</NavLink>
                        <span className="post-time">5 минут назад</span>
                    </div>
                    {/* <NavLink to="/" className="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar" /></NavLink> */}
                </div>
            </div>
      </section>
    )
}

export default Post