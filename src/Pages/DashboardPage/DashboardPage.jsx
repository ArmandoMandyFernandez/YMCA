import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./DashboardPage.scss";

function DashboardPage() {
    return (
        <>
            <Header />
            <div className="dashboard">
                <Sidebar />
                <Overview />
            </div>
        </>
    );
}
export default DashboardPage;
