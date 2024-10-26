import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getComments } from "../features/comments/comments.api"
import { AddComment } from "../features/comments/addcomment"

export const CommentList = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comment.items)
    const {id} = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleModalOpen = () => setIsModalOpen(true)

    const handleModalClose = () => setIsModalOpen(false)

    useEffect(()=>{
        dispatch(getComments(id))
    },[])

    return <>
        <h3>Comments</h3>
        {
            comments.map(comment =>{
                const filled = new Array(comment.rate).fill("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-512.png")
                return <div key={comment.id} style={{padding:5,background:'lightgray'}}>
                    <p>~{comment.text}</p>
                    {
                        filled.map((star,index) => <img key={index} src={star} style={{width:20}} />)
                    }
                </div>
            })
        }
        <button onClick={handleModalOpen}>Add new comment</button>
        {isModalOpen && (
            <AddComment onClose={handleModalClose} onOpen={isModalOpen} id={id}/>
        )}
    </>
}