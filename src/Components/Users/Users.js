import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layouts/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users-container'>
        <div className='users'>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
