import './Header.scss';
import logo from '../../assets/images/logo-no-background.png';

function Header(){
    return(
    <header className='navBar'>
        <div className='navBar__content'>
            <div className='navBar__content-container'>
                <img src={logo} alt="ymca logo" className='navBar__logo'/>
            </div>
            <div>
                <h4>Armando Fernandez</h4>
            </div>
            <div></div>
        </div>
    </header>

    )
}

export default Header;