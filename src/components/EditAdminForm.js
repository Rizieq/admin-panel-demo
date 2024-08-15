import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

const EditAdminForm = ({ admins, onUpdate }) => {
  const { id } = useParams(); // Mengambil id dari URL
  const navigate = useNavigate();
  const adminToEdit = admins.find((admin) => admin.id === parseInt(id));
  const [form, setForm] = useState({ employee_id: '', company_id: '', password: '' });

  useEffect(() => {
    if (adminToEdit) {
      setForm({
        employee_id: adminToEdit.employee_id,
        company_id: adminToEdit.company_id,
        password: adminToEdit.password,
      });
    }
  }, [adminToEdit]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, form);
    navigate('/'); // Redirect to the main page after updating
  };

  return (
    <div className="form-container">
      <h2>Edit Admin</h2>
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
        <button type="submit" className="btn btn-edit">Update Admin</button>
      </form>
    </div>
  );
};

export default EditAdminForm;
