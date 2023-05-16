import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import BenefitsSection from '../../components/BenefitsSection/BenefitsSection';



function HomePage(){
    
    return(
        <section>
            <Hero />
            <BenefitsSection />
        </section>
    )
}
export default HomePage;