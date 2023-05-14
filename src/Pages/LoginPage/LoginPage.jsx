import InputLogin from '../../components/InputLogin/InputLogin';
import LoginButton from '../../components/LoginButton/LoginButton';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';


function LoginPage(){
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:8082/api/users/login", {
            email: event.target.email.value,
            password: event.target.password.value
        })
            .then((response) => {
                console.log(response.data.token);
                sessionStorage.setItem("token", response.data.token);
                navigate('/profile');
            })
            .catch((error) => {
                setError(error.response.data);
            });
    };

    return(
        <section>
            <form action="submit" className='login' onSubmit={handleSubmit}>
                <h1 className='login__title'>Log In</h1>
            <InputLogin className='login__input'/>
        
            {/* <LoginButton /> */}
            <button>Login</button>
            {error && <div className="login__message">{error}</div>}
            </form>
        </section>
    )
}
export default LoginPage;