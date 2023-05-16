import { useBudgets } from '../../Functions/FunctionsContext';
import currencyFormatter from '../../utils';
import './NetIncome.scss';



function NetIncome(){
    const { expenses, income } = useBudgets();

    const expensesAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    const netSavings = income - expensesAmount;


    return(
        <section className='expenses'>
            <h4 className='expenses__total'>Net Savings:</h4>
            <h4>{currencyFormatter.format(netSavings)}</h4>
        </section>
    );
}
export default NetIncome;