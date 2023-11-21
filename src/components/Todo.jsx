function Todo(props) {
    return (
        <li className="tasks-list">
            <div className="d-flex">
                <input 
                    type="checkbox" 
                    checked={props.status} 
                    onClick={() => {
                     props.handleCheck(props.title)}}>
                </input>
                <p> {props.title} </p>
            </div>
            <span className="remove-icon"
                  onClick={() => {
                    props.remove()
                  }} >
            </span>
        </li>
    )
}

export default Todo;