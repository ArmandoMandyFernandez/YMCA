import Expenses from '../Expenses/Expenses';
import Income from '../Income/Income';
import './Overview.scss';

function Overview(){
    return(
        <section className='overview'>
            <Income />
            <Expenses />
        </section>
    )
}
export default Overview;