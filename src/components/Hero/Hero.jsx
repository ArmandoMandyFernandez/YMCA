import "./Hero.scss";
import hero from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content-container">
                <h2 className="hero__content-title">Your Money Counts Also</h2>
                <h4 className="hero__content">
                    It's fun to stay in Budget with YMCA
                </h4>
                <Link to='profile'>
                    <button className="hero__button">Let's Get Started</button>
                </Link>
            </div>
            <div className="hero__image-container">
                <img src={hero} alt="budgeting icon" className="hero__image" />
            </div>
        </section>
    );
}
export default Hero;
