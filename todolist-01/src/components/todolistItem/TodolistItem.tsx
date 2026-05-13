import {TodolistTitle} from "./todolistTitle/TodolistTitle.tsx";
import {TodolistInput} from "./todolistInput/TodolistInput.tsx";
import {Task} from "../../App.tsx";
import {TaskList} from "./taskList/TaskList.tsx";
import {TodolistButton} from "./todolistButton/todolistButton.tsx";


type Props = {
    title: string;
    tasks: Task[]
}

export const TodolistItem = ({title, tasks}: Props) => {
    return (
        <div className="app">
            <div>
                <TodolistTitle title={title}/>
                <TodolistInput/>
                <TaskList tasks={tasks}/>
                <TodolistButton/>
            </div>
        </div>
    )
}
