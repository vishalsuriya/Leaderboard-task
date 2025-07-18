import React, { useEffect, useState } from 'react';
import API_BASE_URL from './api';
import AddUserForm from './Components/AddUserform';
import UserSelector from './Components/UserSelector';
import Leaderboard from './Components/LeaderBoard';
import Claimbutton from './Components/Claimbutton';
import '../src/Components/App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await API_BASE_URL.get('/users/getUsers');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
return (
  <div className="container">
    <h1>Leaderboard Task!</h1>
    <div className="main-content">
      <div className="panel">
        <AddUserForm onUserAdded={fetchUsers} />
        <UserSelector
          users={users}
          onSelect={setSelectedUserId}
        />
        <Claimbutton userId={selectedUserId} onClaimed={fetchUsers} />
      </div>
      <div className="panel">
        <Leaderboard users={users} />
      </div>
    </div>
  </div>
);

};

export default App;
