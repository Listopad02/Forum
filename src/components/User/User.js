import "./User.css"

function User() {
    return (
        <form class="edit-container">
          <h2 class="edit-title">Редактировать</h2>
          <label class="edit-label">Ваш логин
            <input type="text" class="edit-input edit-username"
            name="username"
            minlength="3"
            placeholder="login"
            required />
          </label>
          <label class="edit-label">Ваше фото
            <input type="file" class="edit-input edit-photo"
            name="photo"
            placeholder="URL-photo" />
          </label>
          <button class="edit-btn">Сохранить</button>
        </form>
    )
}

export default User