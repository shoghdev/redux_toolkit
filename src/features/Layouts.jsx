import { NavLink, Outlet } from "react-router-dom"

export const Layouts = ()=> {
    return<>
        <nav>
            <li id="add_btn">
                <NavLink to="/">Home</NavLink>
            </li>
            <li id="add_btn">
                <NavLink to="book/add">Add Book</NavLink>
            </li>
        </nav>
        <div className="main">
            <Outlet />
        </div>
    </>
}