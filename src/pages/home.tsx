import { useEffect, useState } from "react";
import { getUsers, updateUser, deleteUser } from "../services/authService";



const UserList = () => {
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [editingUser, setEditingUser] = useState<any>(null);
    const [editedData, setEditedData] = useState({
        nama: "",
        username: "",
        email: "",
        tempat_tinggal: "",
        tanggal_lahir: "",
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const data = await getUsers();
            setUsers(data);
        } catch (error) {
            console.error("Gagal mengambil data user:", error);
        }
    };
    interface User {
        id: number;
        nama: string;
        username: string;
        email: string;
        tempat_tinggal: string;
        tanggal_lahir: string;
    }

    const handleEditClick = (user: User) => {
        setEditingUser(user);
        setEditedData({
            nama: user.nama,
            username: user.username,
            email: user.email,
            tempat_tinggal: user.tempat_tinggal,
            tanggal_lahir: user.tanggal_lahir,
        });
    };

    const handleUpdate = async () => {
        try {
            await updateUser(editingUser.id, editedData);
            setEditingUser(null);
            fetchUsers(); // Refresh data
        } catch (error) {
            console.error("Gagal memperbarui user:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteUser(id);
            fetchUsers(); // Refresh data
        } catch (error) {
            console.error("Gagal menghapus user:", error);
        }
    };

    return (
        <div>
            <h2>Daftar Pengguna</h2>
            <ul>
                
                {users.map((user: User) => (
                    <li key={user.id}>
                        {editingUser?.id === user.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editedData.nama}
                                    onChange={(e) =>
                                        setEditedData({ ...editedData, nama: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    value={editedData.username}
                                    onChange={(e) =>
                                        setEditedData({ ...editedData, username: e.target.value })
                                    }
                                />
                                <input
                                    type="email"
                                    value={editedData.email}
                                    onChange={(e) =>
                                        setEditedData({ ...editedData, email: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    value={editedData.tempat_tinggal}
                                    onChange={(e) =>
                                        setEditedData({ ...editedData, tempat_tinggal: e.target.value })
                                    }
                                />
                                <input
                                    type="date"
                                    value={editedData.tanggal_lahir}
                                    onChange={(e) =>
                                        setEditedData({ ...editedData, tanggal_lahir: e.target.value })
                                    }
                                />
                                <button onClick={handleUpdate}>Simpan</button>
                                <button onClick={() => setEditingUser(null)}>Batal</button>
                            </>
                        ) : (
                            <>
                                <p><strong>Nama:</strong> {user.nama}</p>
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Tempat Tinggal:</strong> {user.tempat_tinggal}</p>
                                <p><strong>Tanggal Lahir:</strong> {user.tanggal_lahir}</p>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Hapus</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
