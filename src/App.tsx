import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./pages/home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/register" replace />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
