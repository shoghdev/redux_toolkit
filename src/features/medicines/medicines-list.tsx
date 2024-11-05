import { filterByName, getAllMedicines, medicines, total } from "./medicine.slice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect, useState } from "react"
import { MedicineItem } from "./medicine-item"
import { AddMedicine } from "./addmedicine"

export const Medicines = () => {
    const list = useAppSelector(filterByName)
    const dispatch = useAppDispatch()
    const sum = useAppSelector(total)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalOpen = () => setIsModalOpen(true)
    const handleModalClose = () => setIsModalOpen(false)

    useEffect(() => {
        dispatch(getAllMedicines())
    }, [])

    return <>
        <div className="flex gap-3 items-center justify-center border-2 border-gray-500 rounded-lg w-24 p-2 ml-5">
            <img
                className="w-5"
                src="https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/plus-256.png" alt="" />
            <button onClick={handleModalOpen}>Add</button>
            {isModalOpen && (
                <AddMedicine onClose={handleModalClose} onOpen={handleModalOpen}/>
            )}
        </div>
        <div className="pl-5 mt-10 mb-10">
            <h1 className="text-3xl font-mono font-semibold my-12">Medicines list</h1>
            <div className="flex gap-5 flex-wrap">
                {
                    list.map(medicine => <MedicineItem key={medicine.id} medicine={medicine} />)
                }
            </div>
            <h2 className="text-2xl font-mono my-6"><strong>Total: {sum} AMD</strong></h2>
        </div>
    </>
}