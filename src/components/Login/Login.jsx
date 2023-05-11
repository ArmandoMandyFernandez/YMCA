import "./Login.scss";
import LoginButton from "../LoginButton/LoginButton";

function Login() {
    return (
        <section className="login">
            <h2>Login Component</h2>
            <form action="submit">
                <label htmlFor="">
                    <h5>First Name:</h5>
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <h5>Last Name:</h5>
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    <h5>Email:</h5>
                    <input type="text" name="" id="" />
                </label>
                <LoginButton />
            </form>
        </section>
    );
}
export default Login;
