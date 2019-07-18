import React from 'react';
import "../index.css";

const UserList = ({ user }) => {
  return (
    <div className="span">
      <div >
        <img src={`${user.avatar}`} alt={`${user.name}`} />
        <h5>{user.name}</h5>
      </div>
    </div>
  )
}

export default UserList;