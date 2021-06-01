import React, { useState } from "react";
import UserItem from "./UserItem";

const Users2 = ({ users }) => {
  return (
    <div className='users-container'>
      <div className='users'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users2;
