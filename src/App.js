import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/Admin';
import AddAdminForm from './components/AddAdminForm';
import EditAdminForm from './components/EditAdminForm'; // Impor halaman edit
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from './services/api';
import './styles.css';
import Admin from './components/Admin';  // Pastikan Admin.js sudah diimpor
import Users from './components/Employee';
import Settings from './components/Settings';

function App() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const data = await getAdmins();
        setAdmins(data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  const handleAddAdmin = async (newAdminData) => {
    try {
      const newAdmin = await createAdmin(newAdminData);
      setAdmins([...admins, newAdmin.data]);
    } catch (err) {
      setError(err);
    }
  };

  const handleUpdateAdmin = async (id, updatedAdminData) => {
    try {
      const updatedAdmin = await updateAdmin({ ...updatedAdminData, id });
      setAdmins(admins.map((admin) => (admin.id === id ? updatedAdmin.data : admin)));
    } catch (err) {
      setError(err);
    }
  };

  const handleDeleteAdmin = async (id) => {
    try {
      await deleteAdmin(id);
      setAdmins(admins.filter(admin => admin.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading admins: {error.message}</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <AdminDashboard
            admins={admins}
            onEdit={(admin) => handleUpdateAdmin(admin.id, admin)} // Edit admin langsung menggunakan handleUpdateAdmin
            onDelete={handleDeleteAdmin}
          />
        } />
        <Route path="/admins" element={<Admin />} />  {/* Route ke komponen Admin */}
        <Route path="/users" element={<Users />} /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/add-admin" element={<AddAdminForm onAdd={handleAddAdmin} />} />
        <Route path="/edit-admin/:id" element={<EditAdminForm admins={admins} onUpdate={handleUpdateAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;
