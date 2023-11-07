import  Todo  from "./components/Todo.jsx";
import Calender from "./components/Calender.jsx";
import TaskInput from "./components/TaskInput.jsx";
import Search from "./components/SearchInput.jsx";
import  Status from "./components/Status.jsx";

const todos = [
    {
        title: "item 1",
        status: true,
    },
    {
        title: "item 2",
        status: false,
    },
    {
        title: "item 3",
        status: false,
    },
    {
        title: "item 4",
        status: true,
    },
    {
        title: "item 5",
        status: false,
    },
]

export function App() {
    return (
        <div id="app">
            <header className="toper">
                <Calender/>
                <div className="container">
                    <h2 className="today">Today </h2>
                    <TaskInput/>
                </div>
            </header>
            <main className="tasks-holder">
                <div className="container">
                    <div className="all-tasks">
                        <span id="tasks-number">Tasks</span>
                        <span id="delete-all">Delete All</span>
                    </div>
                    <Search/>
                    <Status/>
                    <div className="tasks">
                        <ul id="list-element">
                            {todos.map((todo) => {
                                return <Todo title={todo.title} status={todos.status} /> ;
                            })}
                        </ul>
                    </div>
                    {/* <Todo/> */}
                </div>
            </main>
        </div>
    );
}