import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [nama, setNama] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tempatTinggal, setTempatTinggal] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(nama, username, email, password, tempatTinggal, tanggalLahir);
            alert("Registrasi berhasil!");
            navigate("/login");
        } catch (error) {
            console.error("regist error:", error); 
            alert("Registrasi gagal! Cek kembali data Anda.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Tempat Tinggal" value={tempatTinggal} onChange={(e) => setTempatTinggal(e.target.value)} required />
                <input type="date" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
