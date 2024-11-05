import { useForm } from "react-hook-form"
import { useAppDispatch } from "../../app/hooks"
import { InputMedicine } from "./type"
import { addNewMedicine } from "./medicine.slice"

export const AddMedicine = ({ onOpen, onClose }) => {
    const { register, handleSubmit } = useForm()
    const dispatch = useAppDispatch()
    const onSubmit = (data:InputMedicine) => {
        dispatch(addNewMedicine(data))
        onClose(true)
    }

    return <>
        <div
            onOpen={onOpen}
            onClose={onClose}
            className="
            gap-5 border-2 border-gray-500 rounded-lg p-10
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-[800px] h-[700px] bg-gray-200 shadow-gray-300"
        >
            <div>
                <button 
                    onClick={onClose}
                    className="border-2 rounded-lg border-gray-500 
                               py-1 px-2 hover:bg-gray-100 text-rose-700"
                >x</button>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-center h-full">
                    <input
                        className="focus:outline-none border-b-2 border-gray-500 w-1/2 p-3 rounded-lg my-4"
                        type="text"
                        placeholder="Add a medicine name"
                        {...register("name")}
                    />
                    <input
                        className="focus:outline-none border-b-2 border-gray-500 w-1/2 p-3 rounded-lg my-4"
                        type="number"
                        step={10}
                        placeholder="Add a medicine price"
                        {...register("price")}
                    />
                    <button className="border-gray-500 hover:bg-gray-500 border-2 rounded-lg w-24 p-2 text-gray-700">Save</button>
                </form>
            </div>
        </div>
    </>
}