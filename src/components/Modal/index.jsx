import { useState } from "react";

import "./index.scss";

import imageModal from "../../assets/modalImage.png";
import imageNewsletter from "../../assets/newsletter.png";
import iconSend from "../../assets/send.png";

const Modal = () => {
  const [closeElement, setCloseElement] = useState(true);
  const closeOrHide = () => setCloseElement(false);

  closeElement === false ? document.body.classList.add("removeModal") : null;

  return (
    <div id="modal_login">
      <div className="popup_modal">
        <div className="close_modal">
          <button onClick={closeOrHide}>FECHAR</button>
        </div>

        <div className="content_modal">
          <div className="image_modal">
            <img src={imageModal} alt="image modal gym" />
          </div>

          <div className="form_modal">
            <img src={imageNewsletter} alt="newsletter image" className="icon_newsletter"/>
            <span>Bem Vindo à MAEZTRA</span>
            <p>Receba em Primeira mão </p>
            <strong>desconto e ofertas exclusivas</strong>
            <form>
              <input type="email" placeholder="Digite seu e-mail" />
              <button>
                ENVIAR <img src={iconSend} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal