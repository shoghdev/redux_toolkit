import { IMedecine } from "./type"

interface IProps {
    medicine: IMedecine
}

export const MedicineItem:React.FC<IProps> = ({medicine}) => {
    return <div className="flex gap-5 flex-col justify-center items-center border-2 border-gray-300 rounded-lg p-14">
        <img 
            className="w-10"
            src="https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__pills_medicine_drugs_health-256.png" 
            alt="" 
        />
        <h3 className="font-mono text-lg">{medicine.name}</h3>
        <p><strong>{medicine.price} AMD</strong></p>
    </div>
}