import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./pages/home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
