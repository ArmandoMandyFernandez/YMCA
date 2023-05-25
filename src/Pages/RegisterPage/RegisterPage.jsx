import './RegisterPage.scss';
import Register from '../../components/Register/Register';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function RegisterPage(){
    const navigate = useNavigate();

    const handleSuccessfulSignUp = () => {
        navigate('/profile');
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("rhow");
                } else {
                    entry.target.classList.remove("rhow");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".ridden");
        hiddenElements.forEach((el) => observer.observe(el));

        return() => {
            hiddenElements.forEach((el)=> observer.unobserve(el));
            observer.disconnect();
        };
    },[]);


    return(
        <section className='register ridden'>
            <Register onSignUp={handleSuccessfulSignUp}/>
            <div className='register__container-link'>
                <h5 className='register__content'> Already Have an Account? <Link to="/login">Login</Link> </h5>
            </div>
        </section>
    )
}
export default RegisterPage;