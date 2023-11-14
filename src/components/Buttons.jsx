function buttons(props) {
    return(
        <div className="all-tasks">
            <span id="tasks-number">{props.listLenght} Tasks</span>
            {props.listCount? <span id="delete-all">Delete All</span> : null }
        </div>
    )   
}

export default buttons;
