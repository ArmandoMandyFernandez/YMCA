import Overview from "../../components/Overview/Overview";
import "./DashboardPage.scss";
import { auth } from "../../Config/firebase";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


function DashboardPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("zhow");
                } else {
                    entry.target.classList.remove("zhow");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".zidden");
        hiddenElements.forEach((el) => observer.observe(el));

        return() => {
            hiddenElements.forEach((el)=> observer.unobserve(el));
            observer.disconnect();
        };
    },[]);

    const user = auth.currentUser;
    console.log(user);
    
    if(!user) return <Navigate to='/login'/>;

    return (
        <section className="dashboard zidden">
            <Overview />
        </section>
    );
    
}
export default DashboardPage;
