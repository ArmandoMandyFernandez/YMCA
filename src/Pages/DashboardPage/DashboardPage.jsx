import Overview from "../../components/Overview/Overview";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./DashboardPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import BeginButton from "../../components/BeginButton/BeginButton";
import InputLogin from "../../components/InputLogin/InputLogin";
import LoginButton from "../../components/LoginButton/LoginButton";
// import { Link } from "react-router-dom";


function DashboardPage() {

    return (
        <section className="dashboard">
            {/* {isLoading ? <h1>Loading...</h1> :
            <h1>Welcome {userInfo.first_name}!</h1>}; */}
            {/* <Sidebar /> */}
            <Overview />
        </section>
    );
}
export default DashboardPage;
