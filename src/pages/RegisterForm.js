import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, { name, password }]);
        setName('');
        setPassword('');
    }
    
    const handleRemove = (index) => {
        const newUsers = users.filter((user, i) => i !== index);
        setUsers(newUsers);
    }
    
    return (
        <div className="register-form-container">
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange} />
                <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Register</button>
            </form>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td><button onClick={() => handleRemove(index)} className="remove-button">Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="back-to-home-button-container">
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default RegisterForm;

