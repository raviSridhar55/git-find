import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className='card'>
      <div className='profile-img'>
        <img src={user.avatar_url} alt='avatar...' />
      </div>
      <div className='profile'>
        <h3>{user.login}</h3>
        <div className='link'>
          <a href={user.html_url}>More</a>
          <div className='underline'></div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
