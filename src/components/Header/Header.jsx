import './Header.scss';
import logo from '../../assets/images/logo-no-background.png';
import profilePic from '../../assets/images/FernandezArmando-rt.jpeg'

function Header(){
    return(
    <header className='navBar'>
        <div className='navBar__content'>
            <div className='navBar__content-container'>
                <img src={logo} alt="ymca logo" className='navBar__logo'/>
            </div>
            <div className='navBar__content-profile-container'>
                {/* <button>Sign In</button>
                <button>Login</button> */}
                <h4 className='navBar__profile-name'>Armando Fernandez</h4>
                <img src={profilePic} alt="profile avatar" className='navBar__profile-avatar'/>
                <button className='navBar__button'>Log Out</button>
            </div>
        </div>
    </header>

    )
}

export default Header;