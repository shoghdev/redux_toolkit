import { useEffect } from "react"
import { getTask, getTasks, updateTaskStatus } from "../../features/tasks/tasks.api"
import { useAppDispatch, useAppSelector } from "../hooks"
import { IStatus, ITask } from "../../features/tasks/types"

interface IProps {
    task: ITask
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const handlerStatusUpdate = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value as IStatus
        console.log(newStatus)
        dispatch(updateTaskStatus({id: task.id, status:newStatus }))
    }

    return <>
        <div>
            <p>{task.content}</p>
            <img src={
                task.status == IStatus.unstarted ?
                    "https://cdn4.iconfinder.com/data/icons/fintech-solutions-filled-outline/24/pending_time_clock_watch_timer-512.png" :
                    task.status == IStatus.completed ? "https://cdn0.iconfinder.com/data/icons/coding-and-programming-1/32/success_completed_done_finished_ended-512.png" :
                        "https://cdn3.iconfinder.com/data/icons/complex-arrows-add-on-1/48/v-49-512.png"
            }
                alt=""
            />
            <select value={task.status} onChange={handlerStatusUpdate}>
                <option value={IStatus.unstarted}>unstarted</option>
                <option value={IStatus.onProcess}>on process</option>
                <option value={IStatus.completed}>completed</option>
            </select>
        </div>

    </>
}