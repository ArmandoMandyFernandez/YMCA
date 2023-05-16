import "./ViewExpensesModal.scss";
import Modal from "react-bootstrap/Modal";
import {
    UNCATEGORIZED_BUDGET_ID,
    useBudgets,
} from "../../Functions/FunctionsContext";
import currencyFormatter from "../../utils";

function ViewExpensesModal({ budgetId, handleClose }) {
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
        useBudgets();

    const expenses = getBudgetExpenses(budgetId);
    const budget =
        UNCATEGORIZED_BUDGET_ID === budgetId
            ? {
                  name: "Uncategorized",
                  id: UNCATEGORIZED_BUDGET_ID,
              }
            : budgets.find((b) => b.id === budgetId);

    return (
        <Modal
            show={budgetId != null}
            onHide={handleClose}
            className="viewExpensesModal"
        >
            <Modal.Header>
                <Modal.Title closeButton>
                    <div className="viewExpensesModal__container-header">
                        <h2 className="viewExpensesModal__header">
                            Expenses - {budget?.name}
                        </h2>
                        <div>
                            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                                <button
                                    onClick={() => {
                                        deleteBudget(budget);
                                        handleClose();
                                    }}
                                    className="viewExpensesModal__button-delete"
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {expenses.map((expense) => (
                        <div className="viewExpensesModal__container-expenses-description">
                            <h2 className="viewExpensesModal__expenses-description">
                                {expense.description}
                            </h2>
                            <div className="viewExpensesModal__container-action">
                                <h4 className="viewExpensesModal__amount">
                                    {currencyFormatter.format(expense.amount)}
                                </h4>
                                <button
                                    onClick={() => deleteExpense(expense)}
                                    className="viewExpensesModal__button-close"
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default ViewExpensesModal;
