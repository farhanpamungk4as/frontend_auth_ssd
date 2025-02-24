import axios from "axios";

const API_URL = "http://localhost:3000/auth"; // Sesuaikan dengan backend

export const register = async (
    nama: string,
    username: string,
    email: string,
    password: string,
    tempatTinggal: string,
    tanggalLahir: string
) => {
    return await axios.post(`${API_URL}/register`, {
        nama,
        username,
        email,
        password,
        tempat_tinggal: tempatTinggal,
        tanggal_lahir: tanggalLahir,
    });
};

export const login = async (email: string, password: string) => {
    return await axios.post(`${API_URL}/login`, { email, password });
};

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data; // Data user dikembalikan dalam bentuk array
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateUser = async (id: number, userData: any) => {
    return await axios.put(`${API_URL}/users/${id}`, userData);
};

export const deleteUser = async (id: number) => {
    return await axios.delete(`${API_URL}/users/${id}`);
};




