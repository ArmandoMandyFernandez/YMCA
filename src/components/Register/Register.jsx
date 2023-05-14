import "./Register.scss";
import BeginButton from "../BeginButton/BeginButton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({ closeRegister }) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios
            .post("http://localhost:8082/api/users/register", {
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value,
                email: event.target.email.value,
                password: event.target.password.value,
            })
            .then((res) => {
                setSuccess(true);
                setError("");
                event.target.reset();
            })
            .catch((error) => {
                setSuccess(false);
                setError(error.response.data);
            });
    };

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
                    onSubmit={handleSubmit}
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
                        {success && (
                            <div className="signup__message">Signed up!</div>
                        )}
                        {error && (
                            <div className="signup__message">{error}</div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Register;
