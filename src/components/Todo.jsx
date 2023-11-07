function Todo(props) {
    return (
        <li className="tasks-list">
            <div className="d-flex">
                <input type="checkbox" checked={props.status}></input>
                <p>{props.title}</p>
            </div>
            <span className="remove-icon"></span>
        </li>
    )
}

export default Todo;