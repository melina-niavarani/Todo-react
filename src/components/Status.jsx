function Status(props) {
    return (
        <div className="status">
            <span>Status: </span>
            <select className="select"
                    onChange= {(e)=>{
                        const currentStatus = e.target.value
                        // console.log(currentStatus)
                        props.setStatus(currentStatus)
                    }}>
                <option value="Done">Done</option>
                <option value="Todo">Todo</option>
                <option value="All" selected>All</option>
            </select>
        </div>
    )
}

export default Status