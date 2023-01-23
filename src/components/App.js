import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './header';
import {v4 as uuid} from 'uuid'; 
import Contact from './Contact';
import api from '../api/contact'
import Contactlist from './Contactlist';
//import AddtoContact from './Addtocontact';
import Navigate from './Navigate';
//import { AppwithNav } from './Addtocontact';
//import Contact from './Contact';
function App(){
    const LOCAL_STOR_KEY="Contacts";
    const [contacts,setContact]=useState([]);
    const contact=[
        {
            name:'Suraj',
            Email:'Surajverma@gmail.com'
        },
        {
            name:'Sumit',
            Email:'Sumit67568@gmail.com'
        },
        {
            name:'Amit',
            Email:'Amit762636@gmail.com'
        },
        {
            name:'Sunita',
            Email:'Sunita563435@gmail.com'
        }
    ];
    const addContactHandler=(contact)=>{
        //setContact(contact.push(contact));
        console.log(contact);
        setContact([...contacts,{id:uuid(),...contact}]);
    }
    //reterive the data
        const reteriveContact=async ()=>{
            console.log("hello2");
            const reponse=await api.get('/Contact');
            console.log(reponse.data);
            return reponse.data;
        }

    useEffect(()=>{
        // const retirveContact=JSON.parse(localStorage.getItem(LOCAL_STOR_KEY));
        // console.log(retirveContact);
        // if(retirveContact){setContact(retirveContact)};
        
        const reteriveallContacts=async ()=>{
            console.log("hello");
            const allContacts=await reteriveContact();
            if(allContacts)
            {
                setContact(allContacts);
            }
        }
        reteriveallContacts();
        },[]);
    const deleteId=(id)=>
    {
        console.log(id);
        const newcontacts=contacts.filter((contact)=>{
        return contact.id!==id;
        })
        setContact(newcontacts);
    }
    useEffect(()=>{
        localStorage.setItem(LOCAL_STOR_KEY,JSON.stringify(contacts))
    },[contacts]);
    console.log(contacts);
    return (<div className='ui container'>
        
        <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<Navigate addContactHandler={addContactHandler}></Navigate>}></Route>
                <Route path='/About' element={<Contactlist contacts={contacts} deleteId={deleteId}></Contactlist>}></Route>
                <Route path="/Contact/:id" element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
       <h2>This is my first React js</h2>
    </div>);
}

export default App;