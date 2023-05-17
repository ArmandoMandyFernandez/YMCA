import { auth, googleProvider } from "../../../Config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import "./EmailAuth.scss";
import { useState } from "react";

function EmailAuth({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth.currentUser)


    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onLogin();
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            onLogin();
        } catch (err) {
            console.error(err);
        }
    };

    // const logOut = async () => {
    //     try {
    //         await signOut(auth);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };


    return (
        <section className="auth">
            <div className="auth__container">
                <div className="auth__container-email">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email..."
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth__input-email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth__input-password"
                    />
                    <button className="auth__button-signin" onClick={signIn}>
                        Sign In
                    </button>
                </div>
                <h4 className="auth__or">OR</h4>
                <div>
                    <button
                        onClick={signInWithGoogle}
                        className="auth__button-google"
                    >
                        Google Sign In
                    </button>
                </div>
            </div>
        </section>
    );
}
export default EmailAuth;
