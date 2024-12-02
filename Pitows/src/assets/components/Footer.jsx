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
            <p>EMail de contato</p>
            <p>Pitows.sorriso@gmail.com</p>
            <p>Políticas</p>
            <p>Políticas de Privacidade</p>
            <p>Políticas de Privacidade</p>  
        </div>

        <div className="social-media">
       <p>Redes Sociais</p>
       <a href="#"><i class='bx bxl-facebook-circle'></i></a>
       <a href="#"><i class='bx bxl-whatsapp' ></i></a>
       <a href="#"><i class='bx bxl-instagram' ></i></a>
   </div>
    </footer>);
}


export default Footer;