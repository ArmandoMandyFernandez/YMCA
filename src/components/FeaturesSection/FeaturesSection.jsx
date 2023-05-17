import "./FeaturesSection.scss";
import coin from "../../assets/icons/coin.png";
import card from "../../assets/icons/credit-card.png";
import pie from "../../assets/icons/Graph_7.png"
import { useEffect } from "react";

function FeaturesSection() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add("mhow");
                } else {
                    entry.target.classList.remove("mhow");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".midden");
        hiddenElements.forEach((el) => observer.observe(el));

        return() => {
            hiddenElements.forEach((el)=> observer.unobserve(el));
            observer.disconnect();
        };
    },[]);


    return (
        <section className="features midden">
            <div className="features__container">
                <img src={card} alt="card icon" className="features__icon"/>
                <div className="features__container-content">
                    <h5 className="features__subheader">Track Your Expenses:</h5>
                    <p className="features__description">Easily track and categorize your expenses</p>
                </div>
            </div>
            <div className="features__container">
                <img src={coin} alt="coin icon" className="features__icon" />
                <div className="features__container-content">
                    <h5 className="features__subheader">Goal Setting and Planning:</h5>
                    <p className="features__description">Set financial goals to allocate funds towards them.</p>
                </div>
            </div>
            <div className="features__container">
                <img src={pie} alt="pie graph icon" className="features__icon"/>
                <div className="features__container-content">
                    <h5 className="features__subheader">Review and Analyze:</h5>
                    <p className="features__description">Review what you have spent over the month.</p>
                </div>
            </div>
        </section>
    );
}
export default FeaturesSection;
