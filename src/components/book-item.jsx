import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"

export const BookItem = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const current = useSelector(state=>state.books.current)

    useEffect(()=>{
        dispatch(getBook(id))
    },[id])
    return <>
        <div style={{display:"flex", gap:"20px"}}>
            {
                    current && <div>
                        <img 
                            src={current.photo} 
                            style={{height:300}}
                        />
                        <p>{current.title}</p>
                        <strong>by {current.author}</strong>
                    </div>
                }
        </div>
    </>
}