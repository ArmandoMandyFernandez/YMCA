import './Expenses.scss';
import { useBudgets } from "../../Functions/FunctionsContext"


function Expenses(){
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const max = budgets.reduce((total, budget) => total + budget.max, 0);
    if (max === 0) return null;

    return(
        <section className='expenses'>
            <h2>Total Expenses</h2>
            <h2>${amount} / ${max}</h2>
        </section>
    );
}
export default Expenses;