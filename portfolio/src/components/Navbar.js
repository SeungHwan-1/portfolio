import { NavLink } from "react-router-dom";
import '../assets/Nav.css'; // CSS 파일 경로

const Navbar = () => {
    const activeStyle = {
        backgroundColor: "black",
        color: "white",
    };

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink 
                        to="/about" 
                        className="navbar__link"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                        ABOUT
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink 
                        to="/skills" 
                        className="navbar__link"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                        SKILLS
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink 
                        to="/project" 
                        className="navbar__link"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                        PROJECT
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink 
                        to="/contact" 
                        className="navbar__link"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
