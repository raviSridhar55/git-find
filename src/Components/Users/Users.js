import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layouts/Spinner";

const Users = ({ users, loading, keyword }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='users-container'>
        <h1
          className={keyword ? "title-content" : "title-content-none"}
        >{`Search results for : " ${keyword} " `}</h1>
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
