import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Admin = ({ admins, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (admin) => {
    navigate(`/edit-admin/${admin.id}`);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/">Admin</Link></li>
          
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Admins List</h2>
          <Link to="/add-admin" className="btn btn-add">Add Admin</Link>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee ID</th>
                <th>Company ID</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.employee_id}</td>
                  <td>{admin.company_id}</td>
                  <td>{admin.password}</td>
                  <td>
                    <button className="btn btn-edit" onClick={() => handleEdit(admin)}>Edit</button>
                    <button className="btn btn-delete" onClick={() => onDelete(admin.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
