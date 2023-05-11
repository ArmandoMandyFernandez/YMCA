import './BeginButton.scss';
import { Link } from 'react-router-dom';


function BeginButton(){

    return(
        <Link to='questions'>
        <button className='beginButton'>Begin</button>
        </Link>
    );
}
export default BeginButton;