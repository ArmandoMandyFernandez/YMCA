import Overview from "../../components/Overview/Overview";
import "./DashboardPage.scss";
import { auth } from "../../Config/firebase";
import { Navigate } from "react-router-dom";


function DashboardPage() {
    const user = auth.currentUser;
    
    if(!user) return <Navigate to='/login'/>;

    return (
        <section className="dashboard">
            <Overview />
        </section>
    );
    
}
export default DashboardPage;
