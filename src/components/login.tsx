import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            localStorage.setItem("token", response.data.token);
            alert("Login berhasil!");
            navigate("/home");
        } catch (error) {
          console.error("Login error:", error); // ✅ Cetak error agar tidak unused
          alert("Login gagal! Periksa email dan password.");
      }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
