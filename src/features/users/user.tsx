import { useAppDispatch } from "../../app/hooks"
import { deleteUser } from "./user.slice"

interface IProps {
    user: IUser
}

export const User: React.FC<IProps>  = ({user}) => {
    const dispatch = useAppDispatch()


    const handelDelete = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(deleteUser(user))
    }

    return <>
        <div className="item">
            <h2>{user.name}</h2>
            <p>{user.age}</p>
            <strong>{user.salary}</strong>
            <form onClick={handelDelete}>
                <button>delete</button>
            </form>
        </div>
    </>
}