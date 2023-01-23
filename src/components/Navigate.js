import React from 'react';
import {useNavigate} from 'react-router-dom';
import AddtoContact from './Addtocontact';

function Navigate(props) {
   const addtocontact=(value)=>{
     console.log(value);
     props.addContactHandler(value);
   } 
  const navigate=useNavigate();
  return(<AddtoContact navigate={navigate} addtocontact={addtocontact}></AddtoContact>)
}

export default Navigate