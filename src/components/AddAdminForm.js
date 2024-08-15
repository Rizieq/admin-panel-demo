import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ganti useHistory dengan useNavigate
import '../styles.css';

const AddAdminForm = ({ onAdd }) => {
  const [form, setForm] = useState({ employee_id: '', company_id: '', password: '' });
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.employee_id && form.company_id && form.password) {
      onAdd(form);
      navigate('/'); // Gunakan navigate untuk redirect setelah menambahkan admin
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            name="employee_id"
            value={form.employee_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company ID</label>
          <input
            type="text"
            name="company_id"
            value={form.company_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-add">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdminForm;
