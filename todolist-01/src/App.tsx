import './App.css'
import {TodolistItem} from "./components/todolistItem/TodolistItem.tsx";

export type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

function App() {

    const tasks1: Task[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        { id: 4, title: 'Redux', isDone: false },
    ]

    const tasks2: Task[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am Happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]
    const tasks3 : Task[]  = []


    return (
        <div>
            <TodolistItem title={"what to learn"} tasks={tasks1}/>
            <TodolistItem title={"songs"} tasks={tasks2}/>
            <TodolistItem title={"songs"} tasks={tasks3}/>

        </div>

    )
}

export default App
