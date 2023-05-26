import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../../Functions/FunctionsContext";
import AddBudgetModal from "../AddBudgetModal/AddBudgetModal";
import AddExpenseModal from "../AddExpenseModal/AddExpenseModal";
import BudgetCard from "../BudgetCard/BudgetCard";
import UncatBudgetCard from "../UncatBudgetCard/UncatBudgetCard";
import ViewExpensesModal from "../ViewExpensesModal/ViewExpensesModal";
import "./BudgetOverview.scss";
import { useState } from "react";



function BudgetOverview() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
    const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
    const { budgets, getBudgetExpenses } = useBudgets();

    function openAddExpenseModal(budgetId){
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)

    }

    return (
        <section className="budgetOverview">
            <div className="budgetOverview-container-header">
                <h2 className="budgetOverview-header">Create Your Budget</h2>
                <div className="budgetOverview__container-buttons">
                <button className="budgetOverview-header-button-add" onClick={() => setShowAddBudgetModal(true)}>Add Budget</button>
                <button className="budgetOverview-header-button-expense"
                onClick={openAddExpenseModal}>
                    Add Expense
                </button>
                </div>
            </div>
            {budgets.map(budget =>{
                const amount = getBudgetExpenses(budget.id).reduce(
                    (total, expense) => total + expense.amount, 
                0
                )
                return (
                <BudgetCard 
                key={budget.id}
                name={budget.name} 
                amount={amount} 
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
                />
                )
                })}
            <UncatBudgetCard 
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
            />

            <AddBudgetModal 
            show={showAddBudgetModal} 
            handleClose={() => setShowAddBudgetModal(false)}/>

            <AddExpenseModal 
            show={showAddExpenseModal}
            defaultBudgetId={addExpenseModalBudgetId} 
            handleClose={() => setShowAddExpenseModal(false)}
            />

            <ViewExpensesModal 
            budgetId={viewExpensesModalBudgetId}
            handleClose={() => setViewExpensesModalBudgetId()}
            />
            
            
            
        </section>
    );
}
export default BudgetOverview;
