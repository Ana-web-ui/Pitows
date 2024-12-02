import React from "react";
import "../header.css";

const Header = () =>{

    return(
    <header className="header">
        <div className="logo"><img src="./src/img/image.png" alt="" /></div>
        <nav>
            <ul className="menu">
                <li>Início</li>
                <li>Sobre nós</li>
                <li>SOb Medida</li>
                <li>Coleções</li>
                <li>Contato</li>
            </ul>
        </nav>
        <div className="search-icon"><i class='bx bx-search-alt'></i></div>
    </header>);
}

export default Header;