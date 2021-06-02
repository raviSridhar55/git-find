import React from "react";
import spinner from "./spinner.png";

const Spinner = () => {
  return (
    <div className='hero'>
      <div className='loader'>
        <div className='loading'>
          <img src={spinner} alt='loading...' />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
