import "./Register.scss";
import BeginButton from "../BeginButton/BeginButton";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { useState } from "react";

function Register({ onSignUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState ('')

    const signUp = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(auth.currentUser, {
                displayName: firstName,
            });
            onSignUp();
        } catch (err) {
            console.error(err);
        }
    };

    

    console.log(document.getElementById("first_name"));

    return (
        <section className="register">
            <div className="register__container">
                <h2 className="register__header">Let's Get Started</h2>
                <form
                    action="submit"
                    className="register__form"
                    onSubmit={signUp}
                >
                    <label htmlFor="">
                        <h5>First Name:</h5>
                        <input
                            type="text"
                            className="register__form-input"
                            name="first_name"
                            id="first_name"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Last Name:</h5>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="register__form-input"
                            placeholder="Last Name"
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Email:</h5>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="register__form-input"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        <h5>Password:</h5>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="register__form-input"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <BeginButton />
                </form>
            </div>
        </section>
    );
}
export default Register;
