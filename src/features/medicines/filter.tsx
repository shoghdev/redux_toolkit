import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { currentFilter, updateFilter } from "./medicine.slice"

export const Filter = () => {
    const current = useAppSelector(currentFilter)
    const dispatch = useAppDispatch()


    return <>
        <div className="flex items-center justify-center gap-5 mt-5 mb-5">
            <img
                className="w-5"
                src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-6/32/development_search_magnifier_magnifying_glass_loupe-67-512.png"
                alt=""
            />
            <input 
                className="focus:outline-none border-b-2 border-gray-500" 
                type="text" 
                placeholder="Type a medicine name" 
                onChange={e => dispatch(updateFilter(e.target.value))}
            />
        </div>
    </>
}