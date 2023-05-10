import "./BudgetOverview.scss";
import ProgressBar from 'react-bootstrap/ProgressBar';

function BudgetOverview() {
    return (
        <section className="budgetOverview">
            <h2>Budget</h2>
            <div className="budgetOverview__category-container">
                <h5>Home</h5>
                <ProgressBar animated now={60} />
            </div>
            <div className="budgetOverview__category-container">
                <h5>Utilities</h5>
                <ProgressBar animated now={85} />
            </div>
            <div className="budgetOverview__category-container">
                <h5>Transportation</h5>
                <ProgressBar animated now={40} />
            </div>
            <div className="budgetOverview__category-container">
                <h5>Entertainment</h5>
                <ProgressBar animated now={37} />
            </div>
            <div className="budgetOverview__category-container">
                <h5>Food</h5>
                <ProgressBar animated now={82} />
            </div>
        </section>
    );
}
export default BudgetOverview;
