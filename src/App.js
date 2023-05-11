import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./components/Login/Login"
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";

function App() {
    const user = false;
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={user ? <Navigate to='/'/> : <Login />} />
                <Route path="questions" element={<QuestionsPage />} />
                <Route path="profile" element={<DashboardPage />} />
            </Routes>
        </div>
    );
}

export default App;
