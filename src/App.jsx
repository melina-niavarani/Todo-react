import { useEffect, useState } from "react";

import  Todo  from "./components/Todo.jsx";
import Calender from "./components/Calender.jsx";
import TodoInput from "./components/TodoInput.jsx";
import Search from "./components/SearchInput.jsx";
import  Status from "./components/Status.jsx";
import Buttons from "./components/Buttons.jsx";
import { fetchToDoList } from "./api/todos.js";

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
    const [status, setStatus] = useState("all");
    const [refreshCounter, setRefreshCounter] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)


    const handle = (text) => {
        const todo = {
            title: text,
            status: false,
            id: Math.floor(Math.random()*100000).toString()
        }
        setList([...list, todo])
    }
    
    const toggleStatus = (title) => {
        const nextList = list.map((todo) => {
            if (todo.title === title) {
                return {
                    title: todo.title,
                    status: !todo.status,
                    id: Math.floor(Math.random()*100000).toString()
                };
            }

            return todo
        });
        setList(nextList)
    }

    const filteredList = list.filter((todo) => {
        if ( status === "Done"){
            return todo.status === true;
        } else if ( status === "Todo"){
            return todo.status === false;
        } else {
            return true;
        }
    })
    // console.log(filteredList)

    const remove = (title) => {
            list.forEach((item, i)=>{
                if (item.title === title) {
                    list.splice(i, 1);
                }
            })
        // setList(newList)
    }

    const deleteAll = () => {

    }

    useEffect(() => {

        setLoading(true);
        setError(false);

        fetchToDoList()
            .then((data) => {
                console.log(data)
                setList(data);
            })
            .catch((e) => {
                setError(true)
                console.log({ e })
            })
            .finally(() => {

                setLoading(false)

            })

    }, [refreshCounter])

  

    return (
        <div >
            <header className="toper">
                <Calender/>
                <div className="container">
                    <h2 className="today">Today</h2>
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
                    <Buttons listLenght={filteredList.length} listCount={list.length} deleteAll={deleteAll}/>
                    <Search/>
                    <Status setStatus= {setStatus} status = {status}/>
                    <div className="tasks">
                        <ul id="list-element">
                            {isLoading? <div>Loading...</div> : null }
                            {hasError?  <div>Something went wrong...
                                            <button onClick={() => {
                                                    setRefreshCounter()     
                                                }}> Retry
                                            </button>
                                         </div> : null }
                            {filteredList.map((todo) => {
                                return <Todo key={todo.id} title={todo.title} status={todo.status} handleCheck={toggleStatus} remove={remove} /> ;
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}