import "./Hero.scss";
import hero from "../../assets/images/hero-image.png";
import Register from "../Register/Register";
import { useState } from "react";

function Hero() {
    const [openRegister, setOpenRegister] = useState(false);

    return (
        <section className="hero">
            <div className="hero__content-container">
                <h2 className="hero__content">Your Money Counts Also</h2>
                <h4 className="hero__content">
                    It's fun to stay in Budget with YMCA
                </h4>
                <button
                    className="hero__button"
                    onClick={() => {
                        setOpenRegister(true);
                    }}
                >
                    Get Started
                </button>
                {openRegister && <Register closeRegister={setOpenRegister} />}
            </div>
            <div className="hero__image-container">
                <img src={hero} alt="budgeting icon" className="hero__image" />
            </div>
        </section>
    );
}
export default Hero;
