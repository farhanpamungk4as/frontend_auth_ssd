import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
  nama: string;
  username: string;
  email: string;
  tanggal_lahir: string;
  tempat_tinggal: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const response = await axios.get("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error: unknown) {
        const err = error as Error;
        console.error("Failed to fetch user:", err.message);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Nama: {user.nama}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Tanggal Lahir: {user.tanggal_lahir}</p>
          <p>Tempat Tinggal: {user.tempat_tinggal}</p>
          <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
