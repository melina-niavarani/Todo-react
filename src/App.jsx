import { useState } from "react";

import  Todo  from "./components/Todo.jsx";
import Calender from "./components/Calender.jsx";
import TodoInput from "./components/TodoInput.jsx";
import Search from "./components/SearchInput.jsx";
import  Status from "./components/Status.jsx";
import Buttons from "./components/Buttons.jsx";

// const todos = [
//     {
//         title: "item 1",
//         status: true,
//     },
//     {
//         title: "item 2",
//         status: false,
//     },
//     {
//         title: "item 3",
//         status: false,
//     },
//     {
//         title: "item 4",
//         status: true,
//     },
//     {
//         title: "item 5",
//         status: false,
//     },
// ]

export function App() {

    const [list, setList] = useState([])

    const handle = (text) => {
        const todo = {
            title: text,
            status: false,
        }
        setList([...list, todo])
    }

    return (
        <div >
            <header className="toper">
                <Calender/>
                <div className="container">
                    <h2 className="today">Today </h2>
                    {/* <TodoInput handleSubmit={(value)=>{
                        const newItem = {
                            title: value,
                            status: false,
                        };
                        setList([...list, newItem])
                    }}/> */}
                    <TodoInput handleSubmit={handle} />
                </div>
            </header>
            <main className="tasks-holder">
                <div className="container">
                    <Buttons/>
                    <Search/>
                    <Status/>
                    <div className="tasks">
                        <ul id="list-element">
                            {list.map((todo) => {
                                return <Todo title={todo.title} status={todo.status} /> ;
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}