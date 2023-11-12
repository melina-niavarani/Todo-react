function Status() {
    return (
        <div className="status">
            <span>Status:  </span>
            <select className="select">
                <option value="Done">Done</option>
                <option value="Todo">Todo</option>
                <option value="All">All</option>
            </select>
        </div>
    )
}

export default Status