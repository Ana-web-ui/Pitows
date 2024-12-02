import React from "react";
import "../header.css";

const Header = () =>{

    return(
    <header className="header">
        <div className="logo"><img src="./src/img/image.png" alt="" /></div>
        <nav className="nav-menu">
            <ul className="menu">
                <li>Início</li>
                <li>Sobre nós</li>
                <li>Sob Medida</li>
                <li>Coleções</li>
                <li>Contato</li>
            </ul>
        </nav>
        <div className="search-icon"><i class='bx bx-search-alt bx-sm'></i><input type="text" /></div>
    </header>);
}

export default Header;