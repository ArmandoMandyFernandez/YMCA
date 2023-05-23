import './Expenses.scss';
import { useBudgets } from "../../Functions/FunctionsContext";
import currencyFormatter from '../../utils';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Expenses(){
    const { expenses, budgets } = useBudgets();
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const max = budgets.reduce((total, budget) => total + budget.max, 0);
    const unused = max - amount;
    if (max === 0) return null;

    const data = {
        labels:['Used', 'Leftover'],
        datasets:[
            {
        data: [amount, unused],
        backgroundColor: [
            'rgba(239, 186, 239, 0.5)',
            'rgba(54, 162, 235, 0.5)',
        ],
        borderColor:[
            'rgba(239, 186, 239, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
    }
    ]
    }

    return(
        <section className='expenses'>
            <h4 className='expenses__total'>Total Spent:</h4>
            <h4 className='expenses__amount'>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</h4>
            <div className='expenses__pie'>
                <Pie data={data}/>
            </div>
        </section>
    );
}
export default Expenses;