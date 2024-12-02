import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
    <footer className="Footer">
        <div className="contact-form">
            <h3>Envie suas informações para contato</h3>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Assunto"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div className="info">
            <p>EMail de contato: Pitows.sorriso@gmail.com</p>
            <p>© Leveling 2024</p>
        </div>
    </footer>);
}


export default Footer;