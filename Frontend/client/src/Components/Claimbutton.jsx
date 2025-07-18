import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../api';
import './Claimbutton.css'; 

const Claimbutton = ({ userId, onClaimed }) => {
  const [message, setMessage] = useState('');

  const handleClaim = async () => {
    if (!userId) return alert('Please select a user!');
    try {
      const response = await API_BASE_URL.post(`/users/claim/${userId}`);
      const { points } = response.data;
      setMessage(`🎉 ${points} points awarded!`);
      onClaimed(); 
    } catch (err) {
      setMessage('Error claiming points');
    }
  };
 useEffect(()=>{
  if(message){
    const timer = setTimeout(()=>{
      setMessage('');
    },3000)
    return()=> clearTimeout(timer);
  }
 },[message])
  return (
    <div className="claim-button">
      <button onClick={handleClaim}>Claim Points</button>
      <p className="claim-result">{message}</p>
    </div>
  );
};

export default Claimbutton;
