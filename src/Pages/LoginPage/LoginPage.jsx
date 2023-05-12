import InputLogin from '../../components/InputLogin/InputLogin';
import LoginButton from '../../components/LoginButton/LoginButton';
import './LoginPage.scss';

function LoginPage(){

    // const [error, setError] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     axios.post("http://localhost:8080/api/users/login", {
    //         email: event.target.email.value,
    //         password: event.target.password.value
    //     })
    //         .then((response) => {
    //             console.log(response);
    //             sessionStorage.setItem("token", response.data.token);
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             setError(error.response.data);
    //         });
    // };
    
    return(
        <section>
            <form action="submit" className='login'>
                <h1 className='login__title'>Log In</h1>
            <InputLogin type='text' name='email' label='Email'/>
            <InputLogin type='password' name='password' label='Password'/>
            <LoginButton />

            {/* {error && <div className="login__message">{error}</div>} */}
            </form>
        </section>
    )
}
export default LoginPage;