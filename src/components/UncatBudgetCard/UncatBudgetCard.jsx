import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../Functions/FunctionsContext";
import BudgetCard from "../BudgetCard/BudgetCard";


function UncatBudgetCard(props){
    const { getBudgetExpenses } = useBudgets();
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total,expense)=> total + expense.amount, 0)

    if (amount === 0 ) return null;
    
    return(
        <BudgetCard amount={amount} name="Uncategorized"{...props}/>
    )
}

export default UncatBudgetCard;