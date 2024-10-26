import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addBook } from "./books.api"
import { useNavigate } from "react-router-dom"

export const AddBook = ()=> {

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const file = data.photo[0]
    
        const toBase64 = (file) => 
            new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject(error)
            })
    
        const base64Photo = await toBase64(file)
    
        const newData = {
            title: data.title,
            author: data.author,
            photo: base64Photo 
        }
    
        dispatch(addBook(newData))
        .unwrap()
        .then(() => {
            navigate("/")
            reset()
        })
    }
    
    
    return <>
    <h2>Add New Book</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            type="text" 
            placeholder="Title" 
            {...register('title')}
        />
        <input 
            type="text" 
            placeholder="Author" 
            {...register('author')}
        />
        <input 
            type="file" 
            {...register('photo')}
        />
        <button>Add</button>
    </form>
</>
}