import React from 'react';
import user from "../images/user.png";
import {useLocation,Link} from 'react-router-dom';

const Contact=(props)=>{
  console.log(props);
  const location=useLocation();
  const data=location.state;
  const {id,name,Email}=data.contact;
  console.log(name);
  return (
    <div className='main'>
      <div className='ui card container'>
        <div className='image'>
        <img src={user} alt="user"></img>
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='descripation'>{Email}</div>
        </div>
        <div className='center-div'>
          <Link to='/About'>
          <button className='ui button blue center'>See The Contacts</button>
          </Link>
      </div>
      </div>
     
    </div>
  )
}

export default Contact