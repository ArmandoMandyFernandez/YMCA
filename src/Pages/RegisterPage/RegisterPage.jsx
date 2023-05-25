import './RegisterPage.scss';
import Register from '../../components/Register/Register';
import { Link, useNavigate } from 'react-router-dom';


function RegisterPage(){
    const navigate = useNavigate();

    const handleSuccessfulSignUp = () => {
        navigate('/profile');
    };


    return(
        <section className='register'>
            <Register onSignUp={handleSuccessfulSignUp}/>
            <div className='register__container-link'>
                <h5 className='register__content'> Already Have an Account? <Link to="/login">Login</Link> </h5>
            </div>
        </section>
    )
}
export default RegisterPage;