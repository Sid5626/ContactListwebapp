import React from "react";
import user from "../images/user.png";
import {Link} from 'react-router-dom';

const  Contactcard =(props)=>{
     const {id,name,Email}=props.contact;//this is the cocept of object destructring
     const contact={
        contact:props.contact
     }
     console.log(id);
     const setid=()=>
     {
        console.log(id);
        props.getId(id);
     }
    return (
        <div className='item' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className='content'>
                <Link to={{pathname:`/Contact/${id}`}} state={contact}>
                <div className='header'>{name}</div>
                <div className='header'>{Email}</div>
                </Link>
            </div>
            </div>
            <i className='trash alternate outline icon'
            style={{color:'red',marginTop:'20px',height:60,cursor:'pointer'}}
            onClick={setid}></i>  
        </div>
    );
};

export default Contactcard