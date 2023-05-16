import "./BudgetCard.scss";
import currencyFormatter from "../../utils";
import ProgressBar from "react-bootstrap/ProgressBar";


function BudgetCard({
    name, 
    amount, 
    max, 
    onAddExpenseClick,
    onViewExpensesClick,
}) {
    function getProgressBarVariant(amount, max){
        const ratio = amount/max
        if (ratio < 0.5) return "primary"
        if (ratio < 0.75) return "warning"
        return "danger"
    }

    return (
        <section className="budgetCard">
            <div className="budgetCard-container-header">
                <h3>{name}</h3>
                <p className="budgetCard-container-header-amount">{currencyFormatter.format(amount)} / 
                {max && (
                <span className="budgetCard-container-header-max">{currencyFormatter.format(max)}</span> 
                )}
                </p>
            </div>
            <div className="budgetCard-container-progressBar">
                {max && (<ProgressBar className="budgetCard-progressBar"
                variant={getProgressBarVariant(amount, max)}
                min={0}
                max={max}
                now={amount}
                />
                )}
            </div>
            <div className="budgetCard-container-buttons">
                <button className="budgetCard-button-add"
                onClick={onAddExpenseClick}>Add Expense</button>
                <button className="budgetCard-button-view" onClick={onViewExpensesClick}>View Expense</button>
            </div>
        </section>
    );
}
export default BudgetCard;
