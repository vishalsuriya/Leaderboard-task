import React from 'react';
import '../Components/LeaderBoard.css';

const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>

      <div className="leaderboard-scroll">
        {users.map((user, index) => (
          <div
            key={user._id}
            className={`leaderboard-item rank-${index + 1}`}
          >
        
            <div className="rank-number">
            {user.rank === 1 ? <span style={{ fontSize: '2rem' }}>🥇</span> :
             user.rank === 2 ? <span style={{ fontSize: '2rem' }}>🥈</span> :
             user.rank === 3 ? <span style={{ fontSize: '2rem' }}>🥉</span> :
            `#${user.rank}`}
          </div>

            <div className="user-info">
              <div className="avatar">{user.name[0]}</div>
              <div className="name">{user.name}</div>
            </div>
            <div className="points">
              {user.totalPoints} 🪙
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
