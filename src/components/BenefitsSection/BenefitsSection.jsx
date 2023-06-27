import React, { useEffect } from 'react'
import "./BenefitsSection.scss";
import bag from '../../assets/icons/money-bag.png'
import { BENEFITS_LIST } from '../../constants';


function BenefitsSection() {
    // This is nifty, I'm sure there is another way to do it with React.useRef (I wonder how often this is getting repainted / re-rendered as you scroll)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("bhow");
                } else {
                    entry.target.classList.remove("bhow");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".bidden");
        hiddenElements.forEach((el) => observer.observe(el));

        return() => {
            hiddenElements.forEach((el)=> observer.unobserve(el));
            observer.disconnect();
        };
    },[]);

    // Consider this list being retrieved from an API, OR passed via props - (e.g. a marketing team makes updates to this somewhere remote and you call an endpoint that returns it)
    // Focus on how you can make the code work for you, rather than repeating, see below
    // memoizedBenefits only gets recomputed if the benefitsList (dependency) changes
    const memoizedBenefits = React.useMemo(() => (
        <div className="benefits__container-info">
            {
            // This list of items can be long and this file size would never change
            BENEFITS_LIST.map(({ subheader, description}, index) => (
                <div key={index} className="benefits__container-content">
                    <h3 className="benefits__subheader">{subheader}</h3>
                    <p className="benefits__description">{description}</p>
                </div>
            ))}
        </div>
    ), [])

    return (
        <section className="benefits bidden">
            <div className="benefits__container-image">
                <img 
                src={bag} 
                alt="money bag logo" 
                className="benefits__image"/>
            </div>
            {memoizedBenefits}           
        </section>
    );
}
export default BenefitsSection;