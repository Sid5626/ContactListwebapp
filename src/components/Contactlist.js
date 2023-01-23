import React from 'react';
import Contactcard from './Contactcard';
import {Link} from 'react-router-dom';

class Contactlist extends React.Component{
    render (){
        const getId=(id)=>{
            console.log(id);
            this.props.deleteId(id);
        }
        console.log(this.props.contacts)
        const rendercontactlist=this.props.contacts.map((contact)=>{
            console.log(contact);
            return <Contactcard contact={contact} getId={getId}/>
        });
        return(
            <div className='ui celled list' style={{textAlign:"center"}}>
                <span style={{display:"flex",justifyContent:"space-between"}}><h1>Contact Details List</h1>
                <Link to='/'>
               <button className='ui button primary right' >Add Contacts</button>
               </Link></span>
                {rendercontactlist}
            </div>
        );
    }
}

export default Contactlist;