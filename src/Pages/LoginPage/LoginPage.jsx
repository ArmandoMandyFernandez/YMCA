import InputLogin from '../../components/InputLogin/InputLogin';
import LoginButton from '../../components/LoginButton/LoginButton';
import './LoginPage.scss';


function LoginPage(){


    return(
        <section>
            <form action="submit" className='login' >
                <h1 className='login__title'>Log In</h1>
            <InputLogin className='login__input'/>
        
            <LoginButton />
            
            
            </form>
        </section>
    )
}
export default LoginPage;