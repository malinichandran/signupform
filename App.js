import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component{
  arr=[]
  constructor(props) {
    super(props)
    
    this.state = {
      username:"",
      email:"",
      password:"",
      confirmpwd:""
      }
    
  }
  
  handleUserName=(event)=>{
      this.setState({
        username:event.target.value
      })

  }
  handleEmail=(event)=>{
    this.setState({
      email:event.target.value
    })
  }
 handlePwd=(event)=>{
   this.setState({
     password:event.target.value
   })
 }
 handleConfirmPwd=(event)=>{
   this.setState({
     confirmpwd:event.target.value
   })
 }
      
      

 submitHandler=(event)=>{
  
   const data=this.state;
    event.preventDefault();
   this.arr.push(data);
   console.log(this.arr)
 }
  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler}>
      <label>Username</label><br/>
    <input type="text" value={this.state.username} onChange={this.handleUserName}/><br/>
    <label>Email</label><br/>
    <input type="text" value={this.state.email} onChange={this.handleEmail}/><br/>
    <label>Password</label><br/>
    <input type='password' value={this.state.password} onChange={this.handlePwd}/><br/>
    <label>Confirm Password</label><br/>
    <input type='password' value={this.state.confirmpwd} onChange={this.handleConfirmPwd}/><br/>
    <button type="submit" > Submit</button>
    </form>
    </div>
    )
    }
}

export default App;
