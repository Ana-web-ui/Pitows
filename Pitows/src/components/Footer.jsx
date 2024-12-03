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
            <p>Email de contato</p>
            <p>Pitows.sorriso@gmail.com</p>
            <p>Políticas</p>
            <p>Políticas de Privacidade</p>
            <p>Políticas de Privacidade</p>
          </div>

          <div className="social-media">
            <p>Redes Sociais</p>
            <a href="#">
              <i class="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i class="bx bxl-whatsapp"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
