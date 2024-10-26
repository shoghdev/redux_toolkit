import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import Modal from "@mui/material/Modal"
import { useDispatch } from "react-redux"
import { addComment } from "./comments.api"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

export const AddComment = ({ onOpen, onClose, id }) => {
    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit =  (data) => {
        dispatch(addComment({...data, book:id}))
        .unwrap()
        navigate("/book/" + id)
        reset()
        onClose(true)
    }

    return (
        <Modal open={onOpen} onClose={onClose}>
            <Box sx={style}>
                <IconButton onClick={onClose} color="error" style={{ margin: '16px' }}>X</IconButton>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography style={{ margin: '16px' }}>
                        Add Comment
                    </Typography>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Add comment"
                        variant="outlined"
                        {...register("text")}
                        style={{ margin: '16px' }}
                    />
                    <FormControl fullWidth style={{ margin: '16px' }}>
                        <InputLabel id="rate-label">Rate</InputLabel>
                        <Select
                            labelId="rate-label"
                            id="rate"
                            defaultValue={1}
                            {...register("rate")}
                            label="Rate"
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" size="small" type="submit" style={{ margin: '16px' }}>
                        Add
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}
