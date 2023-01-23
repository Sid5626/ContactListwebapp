import React from 'react';
import {useNavigate} from 'react-router-dom';



class AddtoContact extends React.Component{
       
       state={
        name:'',
        Email:''
       };
          navg=(e)=>{
            this.props.navigate('/About');
            e.preventDefault();
        if(this.state.name==='' && this.state.Email==='')
        {
        alert('Fill All the Fields It is Mandatory');
        return;
        }
        else
        {
          //console.log(this.state);
          this.props.addtocontact(this.state);
          this.setState({name:'',Email:''})
          console.log(this.props);
          console.log(this.props)
        } 
        }
       //add=(e)=>{
        //alert('Hello i am runing yaar');
        // e.preventDefault();
        // if(this.state.name==='' && this.state.Email==='')
        // {
        // alert('Fill All the Fields It is Mandatory');
        // return;
        // }
        // else
        // {
        //   //console.log(this.state);
        //   this.props.addtocontact(this.state);
        //   this.setState({name:'',Email:''})
        //   console.log(this.props);
        //   console.log(this.props)

        //}
       render(){
        return(
            <div className='ui main'>
                <h2 style={{display:'inline'}}>Add Contact {this.props.name} {this.props.last}</h2>
                <form className='ui form' onSubmit={this.navg}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='Name' placeholder='Enter Your Name' 
                        value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='Email' placeholder='Enter Your Email'
                        value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})}></input>
                    </div>
                    <div>
                    <button className='ui button blue' style={{margin:'auto',display:'block',marginTop:20,width:200}}>Add</button>
                    </div>
                </form>
            </div>
        );
       }
}
export default AddtoContact;