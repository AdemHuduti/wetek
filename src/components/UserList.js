import React from 'react';
import "../index.css";

const UserList = ({ user }) => {
  return (
    <div className="user-list mb-3">
      <div>
        <img src={`${user.avatar}`} alt={`${user.name}`} />
        <h6 className="user-name">{user.name}</h6>
      </div>
    </div>
  )
}

export default UserList;