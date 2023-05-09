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
                <h4 className='navBar__profile-name'>Armando Fernandez</h4>
                <img src={profilePic} alt="profile avatar" className='navBar__profile-avatar'/>
            </div>
        </div>
    </header>

    )
}

export default Header;