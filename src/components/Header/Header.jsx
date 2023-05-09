import './Header.scss';
import logo from '../../assets/images/logo-no-background.svg'

function Header(){
    return(
    <header className='navBar'>
        <div className='navBar__content'>
            <div className='navBar__logo-container'>
                <img src={logo} alt="" />
            </div>

        </div>
    </header>

    )
}

export default Header;