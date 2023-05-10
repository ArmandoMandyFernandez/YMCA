import './Hero.scss';
import hero from '../../assets/images/hero-image.png'


function Hero(){
    return(
        <section className='hero'>
            <div className='hero__content-container'>
                <h2 className='hero__content'>Your Money Counts Also</h2>
                <h4 className='hero__content'>It's fun to stay in Budget with YMCA</h4>
                <button className='hero__button'>Get Started</button>
            </div>
            <div className='hero__image-container'>
                <img src={hero} alt="budgeting icon" className='hero__image'/>
            </div>
            
        </section>
    )
}
export default Hero;