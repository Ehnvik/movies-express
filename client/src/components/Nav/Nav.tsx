import { NavLink } from "react-router-dom"
import "./Nav.scss";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Hem
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies">
                        Visa filmer
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}