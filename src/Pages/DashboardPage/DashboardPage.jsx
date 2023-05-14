import Overview from "../../components/Overview/Overview";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./DashboardPage.scss";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

function DashboardPage() {

    return (
        <section className="dashboard">
            <Sidebar />
            <Overview />
        </section>
    );
}
export default DashboardPage;
