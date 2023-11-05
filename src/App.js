import  Todo  from "./components/Todo.js";
import Calender from "./components/Calender.js";
import TaskInput from "./components/TaskInput.js";
import Search from "./components/SearchInput.js";
import  Status from "./components/Status.js";


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
                    <Todo/>
                </div>
            </main>
        </div>
    );
}