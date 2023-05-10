import './Login.scss';
import LoginButton from '../LoginButton/LoginButton';

function Login(){
    return(
        <section className='login'>
            <h2>Login Component</h2>
            <form action="submit">
                <input type="text" />
                <input type="text" name="" id="" />
                <LoginButton />
            </form>
        </section>
    );
}
export default Login;