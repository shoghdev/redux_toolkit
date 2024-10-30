import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
//import { updateTask } from "./tasks.slice"
import { IStatus } from "./types"
import { getTasks } from "./tasks.api"
import { TaskItem } from "../../app/components/task-item"

export const TaskList: React.FC = () => {
    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getTasks())
    },[])
    return <>
        <h3>Task List</h3>
        <div id="tasks">
            {
                tasks.map(task=>
                    <TaskItem key={task.id} task={task} />
                )
            }
        </div>
    </>
}