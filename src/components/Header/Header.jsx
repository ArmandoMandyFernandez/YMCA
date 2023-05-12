import './Header.scss';
import logo from '../../assets/images/logo-no-background.png';
import { useNavigate, Link } from 'react-router-dom';
// import profilePic from '../../assets/images/FernandezArmando-rt.jpeg'

function Header(){
    const navigate = useNavigate();


    return(
    <header className='navBar'>
        <div className='navBar__content'>
            <div className='navBar__content-container'>
                <img src={logo} alt="ymca logo" className='navBar__logo'/>
            </div>
            <div className='navBar__content-profile-container'>
                <Link to='/register'>
                <button className='navBar__button'>Sign Up</button>
                </Link>
                <button className='navBar__button'>Login</button>
                {/* <h4 className='navBar__profile-name'>Armando Fernandez</h4>
                <img src={profilePic} alt="profile avatar" className='navBar__profile-avatar'/>
                <button className='navBar__button'>Log Out</button> */}
            </div>
        </div>
    </header>

    )
}

export default Header;