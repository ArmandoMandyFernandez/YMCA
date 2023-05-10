import "./App.scss";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="profile" element={<DashboardPage />} />
            </Routes>
        </div>
    );
}

export default App;
