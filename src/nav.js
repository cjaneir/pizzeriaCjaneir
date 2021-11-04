import Cartwidget from "./cartWidget"
/* import { Link } from "react-router-dom" */

const Nav = () => {
    return (
            <nav>
                <a href="#">INICIO</a>
                <a href="#">MENU</a>
                <a href="#">UBICACION</a>
                <a href="#">CONTACTO</a>
                <Cartwidget/>
            </nav>
            
    )       
}

export default Nav

