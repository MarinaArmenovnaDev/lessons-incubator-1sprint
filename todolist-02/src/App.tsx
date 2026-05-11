import './App.css'
import {TodolistItem} from './TodolistItem'
import {useState} from "react";

export type Task = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValues = "All" | "Active" | "Completed"

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValues>('All')

    let filteredTasks = tasks
    if (filter === 'Active') {
        filteredTasks= tasks.filter(task => !task.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }

    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: FilterValues) => {
        setFilter(filter)
    }

    return (
        <div className="app">
            <TodolistItem title="What to learn"
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
            />
        </div>
    )
}
