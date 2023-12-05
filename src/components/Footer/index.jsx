import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import logoVtex from "../../assets/vtex.png";
import logoMaeztra from "../../assets/maeztra.png";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer_newsletter">
        <h2>Receba Nossa Newsletter</h2>
        <div className="newsletter_input">
          <form>
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="footer_links">
        <div className="links_informations">
          <h3>Informações</h3>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>

            <li>
              <a href="#">Prazo de Envio</a>
            </li>

            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>

            <li>
              <a href="#">Promoções e Cupons</a>
            </li>
          </ul>
        </div>

        <div className="links_my_account">
          <h3>
            <a className="open_menu_mobile" href="#">
              Minha Conta
            </a>
          </h3>
          <ul>
            <li>
              <a href="#">Minha Conta</a>
            </li>

            <li>
              <a href="#">Meus Pedidos</a>
            </li>

            <li>
              <a href="#">Cadastre-se</a>
            </li>
          </ul>
        </div>

        <div className="links_where_find">
          <h3>
            <a className="open_menu_mobile" href="#">
              Onde nos Encontrar
            </a>
          </h3>
          <ul>
            <li>
              <a href="#">Lojas</a>
            </li>

            <li>
              <a href="#">Endereço</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer_gray_icons">
        <div className="links_social_networking">
          <a href="#">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>

        <div className="links_card">
          <a href="#">
            <img src={Visa} alt="visa" />
          </a>

          <a href="#">
            <img src={Mastercard} alt="maestacard" />
          </a>

          <a href="#">
            <img src={Visa} alt="visa" />
          </a>

          <a href="#">
            <img src={Mastercard} alt="maestacard" />
          </a>
        </div>

        <div className="links_company">
          <a href="#">
            <img src={logoVtex} alt="vtex" />
          </a>

          <a href="#">
            <img src={logoMaeztra} alt="maeztra" />
          </a>
        </div>
      </section>
    </footer>
  );
}
export default Footer