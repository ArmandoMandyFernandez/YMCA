import EmailAuth from '../../components/Auth/EmailAuth/EmailAuth';
import './LoginPage.scss';
import { useNavigate } from 'react-router-dom'


function LoginPage(){
    const navigate = useNavigate();

    const handleSuccessfulLogin = () => {
        navigate('/profile');
    };


    return(
        <section>
            <EmailAuth onLogin={handleSuccessfulLogin}/>
        </section>
    )
}
export default LoginPage;