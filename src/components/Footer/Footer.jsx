import "./Footer.scss";
import twitter from "../../assets/icons/twitter.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="footer">
            <h6 className="footer__subheader">Watch This Project Grow</h6>
            <div className="footer__container-social">
                <Link to="https://twitter.com/Man_Dee">
                    <img src={twitter} alt="" className="footer__social" />
                </Link>
                <Link to="https://github.com/ArmandoMandyFernandez">
                    <img src={github} alt="" className="footer__social" />
                </Link>
                <Link to="https://www.linkedin.com/in/armando-mandy-fernandez/">
                    <img src={linkedin} alt="" className="footer__social" />
                </Link>
            </div>
        </section>
    );
}

export default Footer;
