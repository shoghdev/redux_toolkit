import { useSelector } from "react-redux"
import { User } from "./user"
import { useAppDispatch } from "../../app/hooks"
import { useEffect } from "react"
import { getAllUsers, users } from "./user.slice"


export const UsersList = () => {
    const list = useSelector(users)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return <>
        <div className="list">
          {
            list.map(user => <User key={user.id} user={user} />)
          }
        </div>
    </>
}