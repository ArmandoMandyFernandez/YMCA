import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';



function HomePage(){

    
    return(
        <section>
            <Hero />
            <BenefitsSection />
            <FeaturesSection />
        </section>
    )
}
export default HomePage;