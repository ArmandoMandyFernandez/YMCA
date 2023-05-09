import "./Sidebar.scss";
import income from "../../assets/icons/coin.png";
import expense from "../../assets/icons/credit-card.png";
import dashboard from '../../assets/icons/pie-chart.png'

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar__subheader-container">
                <h5 className="sidebar__subheader">Dashboard</h5>
                <img src={dashboard} alt="income icon" className="sidebar__icon" />
            </div>
            <div className="sidebar__subheader-container">
                <h5 className="sidebar__subheader">Income</h5>
                <img src={income} alt="income icon" className="sidebar__icon" />
            </div>
            <div className="sidebar__subheader-container">
                <h5 className="sidebar__subheader">Expenses</h5>
                <img
                    src={expense}
                    alt="expense icon"
                    className="sidebar__icon"
                />
            </div>
        </section>
    );
}

export default Sidebar;
