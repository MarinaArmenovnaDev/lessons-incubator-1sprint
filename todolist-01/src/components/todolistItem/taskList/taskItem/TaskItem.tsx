import type {Task} from "../../../../App.tsx";

type Props = {
    task: Task;
}

export const TaskItem = ({task}: Props) => {
    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
        </li>
    )
}
