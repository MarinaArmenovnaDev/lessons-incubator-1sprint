import type {Task} from "../../../App.tsx";
import {TaskItem} from "./taskItem/TaskItem.tsx";


type TaskListProps = {
    tasks: Task[];
}

export const TaskList = ({tasks}: TaskListProps) => {
    return (
        <ul>
            {tasks.length === 0
                ? <p>No tasks</p>
                : tasks.map((task: Task) => (
                    <TaskItem task={task}/>
                ))
            }

        </ul>
    )
}
