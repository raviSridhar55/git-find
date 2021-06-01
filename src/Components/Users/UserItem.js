import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className='card'>
      <img src={user.avatar_url} alt='avatar...' />
      <h3>{user.login}</h3>
      <a href={user.html_url}>Click Here!</a>
    </div>
  );
};

export default UserItem;
