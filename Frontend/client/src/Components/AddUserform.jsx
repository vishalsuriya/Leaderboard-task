import React, { useState,useEffect } from 'react';
import API_BASE_URL from '../api';
import './AddUserForm.css'; 

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await API_BASE_URL.post('/users/addUser', { name });
      setMessage(response.data.message);
      setName('');
      onUserAdded(); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };
 useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div className="add-user-form">
      <form onSubmit={handleAddUser}>
        <h2 className='heading'>Add new user</h2>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default AddUserForm;
