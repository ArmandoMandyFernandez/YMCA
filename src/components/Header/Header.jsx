import "./Header.scss";
import logo from "../../assets/images/ymca-logo-transparent.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../Config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);

            }
        });
        return unsubscribe;
    }, []);

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <header className="navBar">
            <div className="navBar__content">
                <div className="navBar__content-container">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="ymca logo"
                            className="navBar__logo"
                        />
                    </Link>
                </div>
                <div className="navBar__content-profile-container">
                    {!isLoggedIn ? (
                        <Link to="/login" className="navBar__button">
                            <button className="navBar__button">Login</button>
                        </Link>
                    ) : (
                        <div className="navBar__loggedIn-container">
                            <h4>Hello, {auth.currentUser.displayName}</h4>
                            <button
                                onClick={logOut}
                                className="navBar__button"
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
