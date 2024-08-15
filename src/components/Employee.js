import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees } from '../services/api';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data); // Asumsikan data yang diambil langsung array employee
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading employees: {error.message}</p>;

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/">Admin</Link></li>
          <li><Link to="/users">Employee</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Employee List</h2>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personal Information ID</th>
                <th>General Information ID</th>
                <th>Job Information ID</th>
                <th>Company ID</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id_employee}>
                  <td>{employee.id_employee}</td>
                  <td>{employee.personal_information_id}</td>
                  <td>{employee.general_information_id}</td>
                  <td>{employee.job_information_id}</td>
                  <td>{employee.company_id}</td>
                  <td>{employee.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
