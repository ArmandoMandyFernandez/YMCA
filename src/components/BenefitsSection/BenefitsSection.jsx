import "./BenefitsSection.scss";
import bag from '../../assets/icons/money-bag.png'


function BenefitsSection() {
    

    return (
        <section className="benefits">
            <div className="benefits__container-image">
                <img 
                src={bag} 
                alt="money bag logo" 
                className="benefits__image"/>
            </div>
            <div className="benefits__container-info">
                <div>
                <h3 className="benefits__subheader">Yearn for Financial Confidence:</h3>
                <p className="benefits__description">Our budgeting site empowers you to take charge of your money with confidence and clarity</p>
                </div>
                <div>
                <h3 className="benefits__subheader">Maximize Your Savings Potential:</h3>
                <p className="benefits__description">Discover the magic of our budgeting tools and unlock your full savings potential, bringing your dreams within reach</p>
                </div>
                <div>
                <h3 className="benefits__subheader">Create a Solid Financial Foundation:</h3>
                <p className="benefits__description">With our comprehensive budgeting features, you can establish a strong financial foundation that will support your goals and aspirations.</p>
                </div>
                <div>
                <h3 className="benefits__subheader">Achieve Abundance and Prosperity:</h3>
                <p className="benefits__description">Begin your journey to financial success and enjoy the rewards of diligent budgeting -- a life filled with abundance, freedome, and peace of mind</p>
                </div>
            </div>
            
            
        </section>
    );
}
export default BenefitsSection;