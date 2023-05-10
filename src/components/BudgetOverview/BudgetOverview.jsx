import "./BudgetOverview.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';

function BudgetOverview() {
    const nowHome = 90;
    const nowUtils = 85;
    const nowTrans = 75;
    const nowEnt = 37;
    const nowFood = 82;

    return (
        <section className="budgetOverview">
            <h2>Budget</h2>
            <div className="budgetOverview__category-container">
                <h5>Home 🏠</h5>
                <ProgressBar animated now={90} label={`${nowHome}%`}/>
            </div>
            <div className="budgetOverview__category-container">
                <h5>Utilities 🚰</h5>
                <ProgressBar animated now={85} label={`${nowUtils}%`}/>
            </div>
            <div className="budgetOverview__category-container">
                <h5>Transportation 🚙</h5>
                <ProgressBar animated now={75} label={`${nowTrans}%`}/>
            </div>
            <div className="budgetOverview__category-container">
                <h5>Entertainment 🍿</h5>
                <ProgressBar animated now={37} label={`${nowEnt}%`}/>
            </div>
            <div className="budgetOverview__category-container">
                <h5>Food 🍔</h5>
                <ProgressBar animated now={82} label={`${nowFood}%`}/>
            </div>
        </section>
    );
}
export default BudgetOverview;
