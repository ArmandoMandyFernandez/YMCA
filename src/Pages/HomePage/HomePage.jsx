import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import Footer from '../../components/Footer/Footer';



function HomePage(){

    
    return(
        <section>
            <Hero />
            <BenefitsSection />
            <FeaturesSection />
            <Footer />
        </section>
    )
}
export default HomePage;