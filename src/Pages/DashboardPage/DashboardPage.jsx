import Overview from "../../components/Overview/Overview";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./DashboardPage.scss";

function DashboardPage() {
    return (
        <section className="dashboard">
            <Sidebar />
            <Overview />
        </section>
    );
}
export default DashboardPage;
