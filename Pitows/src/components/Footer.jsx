import React from "react";
import "../footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <div className="contact-form">
            <h3>Envie suas informações para contato</h3>
            <form>
              <div className="form-input">
                <div>
                  <label>Nome</label>
                  <input type="text" placeholder="| Exemplo" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="| exemplo@gmail.com" />
                </div>
              </div>
              <div>
                <textarea placeholder="| Assunto"></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="info">
            <div>
            <h3>Email de contato</h3>
            <p>Pitows.sorriso@gmail.com</p></div>
           <div> <h3>Políticas</h3>
            
            <p>Políticas de Privacidade</p>
            <p>Políticas de Privacidade</p></div>
          </div>

          <div className="social-media">
            <h3>Redes Sociais</h3>
            <a href="#">
              <i class="bx bxl-facebook-circle bx-md"></i>
            </a>
            <a href="#">
              <i class="bx bxl-whatsapp bx-md"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram bx-md"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
