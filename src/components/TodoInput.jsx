import { useState } from "react";

function TodoInput(props) {
    const [inputValue, setInputValue] = useState("") ;

    return (
        <div className="add-container">
            <input 
                // onKeyUp={(e) => {
                //     const exclude = ["Enter", "Shift"]
                //     if (e.key === "Backspace" ) {
                //         return
                //     }else if (exclude.includes(e.key)) {
                //         return
                //     }
                //  update_string(my_string + e.key)
                // }} 
                onChange={(e) => {
                    setInputValue(e.target.value)
                    if (e.target === "Enter") {
                        console.log("enter")
                    }
                }}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        props.handleSubmit(inputValue); 
                        setInputValue("");
                    }
                }}
                value={inputValue}
                type="text"
                className="writing-tasks"  
                placeholder="Write a new task"

            />
            <button 
                onClick={()=>{
                    props.handleSubmit(inputValue);
                    // props.handleSubmit("hi")
                    setInputValue("");
                }}
                className="add-new"
            >
                Add
            </button>
        </div>
    )
}

export default TodoInput