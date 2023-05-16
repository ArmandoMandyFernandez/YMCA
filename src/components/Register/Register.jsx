import "./Register.scss";
import BeginButton from "../BeginButton/BeginButton";


function Register({ closeRegister }) {
    return (
        <section className="register">
            <div className="register__container">
                <div className="register__container-close">
                    <button
                        onClick={() => closeRegister(false)}
                        className="register__container-close-button"
                    >
                        X
                    </button>
                </div>
                <h2 className="register__header">Let's Get Started</h2>
                <form
                    action="submit"
                    className="register__form"
                >
                    <label htmlFor="">
                        <h5>First Name:</h5>
                        <input
                            type="text"
                            className="register__form-input"
                            name="first_name"
                            id="first_name"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Last Name:</h5>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="register__form-input"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Email:</h5>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="register__form-input"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Password:</h5>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="register__form-input"
                        />
                    </label>
                    <BeginButton />
                    <div>
                        {/* {success && (
                            <div className="signup__message">Signed up!</div>
                        )}
                        {error && (
                            <div className="signup__message">{error}</div> */}
                        {/* )} */}
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Register;
