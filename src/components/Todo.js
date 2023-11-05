function Todo() {
    return (
        <div className="tasks">
            <ul id="list-element">
                <li className="tasks-list">
                    <div className="d-flex">
                        <input type="checkbox"></input>
                        <p>task 1</p>
                    </div>
                    <span className="remove-icon"></span>
                </li>
            </ul>
        </div>
    )
}

export default Todo;