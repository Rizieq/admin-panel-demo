import axios from 'axios';

const BASE_URL = 'http://localhost:3000';


// Fungsi untuk mendapatkan semua admin
export const getAdmins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admins', error);
    throw error;
  }
};

// Fungsi untuk mendapatkan semua employee
export const getEmployees = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/employee`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees', error);
    throw error;
  }
};

// Fungsi untuk membuat admin baru
export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error creating admin', error);
    throw error;
  }
};

// Fungsi untuk memperbarui admin
export const updateAdmin = async (adminData) => {
  try {
    const response = await axios.put(`${BASE_URL}/admin`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error updating admin', error);
    throw error;
  }
};

// Fungsi untuk menghapus admin
export const deleteAdmin = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/delete`, {
      data: { id },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting admin', error);
    throw error;
  }
};
