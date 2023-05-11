import "./Login.scss";
import BeginButton from "../BeginButton/BeginButton";

function Login({ closeLogin }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.first_name.value);
        console.log(event.target.last_name.value);
        console.log(event.target.email.value);
    };

    return (
        <section className="login">
            <div className="login__container">
                <div className="login__container-close">
                    <button
                        onClick={() => closeLogin(false)}
                        className="login__container-close-button"
                    >
                        {" "}
                        X{" "}
                    </button>
                </div>
                <h2 className="login__header">Let's Get Started</h2>
                <form action="submit" className="login__form" onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <h5>First Name:</h5>
                        <input
                            type="text"
                            className="login__form-input"
                            name="first_name"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Last Name:</h5>
                        <input
                            type="text"
                            name="last_name"
                            id=""
                            className="login__form-input"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Email:</h5>
                        <input
                            type="email"
                            name="email"
                            id=""
                            className="login__form-input"
                        />
                    </label>
                    <BeginButton />
                </form>
            </div>
        </section>
    );
}
export default Login;
