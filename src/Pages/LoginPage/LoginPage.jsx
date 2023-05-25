import EmailAuth from '../../components/Auth/EmailAuth/EmailAuth';
import './LoginPage.scss';
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react';



function LoginPage(){
    const navigate = useNavigate();

    const handleSuccessfulLogin = () => {
        navigate('/profile');
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("lhow");
                } else {
                    entry.target.classList.remove("lhow");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".lidden");
        hiddenElements.forEach((el) => observer.observe(el));

        return() => {
            hiddenElements.forEach((el)=> observer.unobserve(el));
            observer.disconnect();
        };
    },[]);


    return(
        <section className='login lidden'>
            <EmailAuth onLogin={handleSuccessfulLogin}/>
            <div className='login__container-link'>
                <h5 className='login__content'> Don't have an Account? <Link to="/register">Register</Link> </h5>
            </div>
            
        </section>
    )
}
export default LoginPage;