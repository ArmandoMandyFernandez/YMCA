import BudgetOverview from "../BudgetOverview/BudgetOverview";
import Expenses from "../Expenses/Expenses";
import Income from "../Income/Income";
import "./Overview.scss";

function Overview() {
    return (
        <section className="overview">
            <div className="overview__header-container">
                <Income />
                <Expenses />
            </div>
            <div className="overview__footer-container">
                <BudgetOverview />
            </div>
        </section>
    );
}
export default Overview;
