import React from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
  const history = useHistory()

  return (
    <div onClick={()=>{
      history.push('/')
    }}>
      user
    </div>
  );
}

export default User;
