import "./Login.scss";
import BeginButton from "../BeginButton/BeginButton";

function Login({ closeLogin }) {
    return (
        <section className="login">
            <div className="login__container">
                <div className="login__container-close">
                    <button onClick={() => closeLogin(false)}className="login__container-close-button"> X </button>
                </div>
                <h2 className="login__header">Let's Get Started</h2>
                <form action="submit" className="login__form">
                    <label htmlFor="">
                        <h5>First Name:</h5>
                        <input type="text" className="login__form-input"/>
                    </label>
                    <label htmlFor="">
                        <h5>Last Name:</h5>
                        <input type="text" name="" id="" className="login__form-input"/>
                    </label>
                    <label htmlFor="">
                        <h5>Email:</h5>
                        <input type="email" name="" id="" className="login__form-input"/>
                    </label>
                    <BeginButton />
                </form>
            </div>
        </section>
    );
}
export default Login;
