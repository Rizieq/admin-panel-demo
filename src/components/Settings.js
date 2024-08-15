import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
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
          <h2>Settings List</h2>
          {/* <Link to="/add-admin" className="btn btn-add">Add Admin</Link> */}
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
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
