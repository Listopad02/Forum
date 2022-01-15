import "./NewPost.css"

function NewPost() {
    return (
        <form action="#" className="add-post">
            <input type="text" name="title" className="add-title" placeholder="Заголовок поста" />
            <textarea name="text" className="add-text" placeholder="Текст вашего поста"></textarea>
            <input type="text" name="tags" className="add-tags" placeholder="Добавьте теги через запятую" />
            <div className="add-buttons">
                <button type="submit" className="button add-button">
                    {/* <svg class="icon icon-fire">
                        <use xlink:href="img/icons.svg#fire"></use>
                    </svg> */}
                    Опубликовать пост
                </button>
            </div>
        </form>
    )
}

export default NewPost