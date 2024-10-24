import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"

export const Users = () => {
    const users = useSelector(state=> state.accounts)
    const dispatch  = useDispatch()
    const status = useSelector(state=>state.status)

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    console.log(users)
    return <>
        <h3>{users.length}</h3>
        <p>{status}</p>
    </>
}