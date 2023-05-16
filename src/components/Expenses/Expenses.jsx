import './Expenses.scss';
import { useBudgets } from "../../Functions/FunctionsContext";
import currencyFormatter from '../../utils';


function Expenses(){
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const max = budgets.reduce((total, budget) => total + budget.max, 0);
    if (max === 0) return null;

    return(
        <section className='expenses'>
            <h4 className='expenses__total'>Total Spent:</h4>
            <h4>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</h4>
        </section>
    );
}
export default Expenses;