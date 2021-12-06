import React from 'react';
import axios from 'axios';
import './UserRegistration.css';

class UserPost extends React.Component {
    state = {
        username:'',
        password:'',
        firstname:'',
        lastname:'',
        age:0,
        email:''
    }
    usernameinputChange(event){
        this.setState({username:event.target.value});
    }
    passwordinputChange(event){
        this.setState({password:event.target.value});
    }
    firstnameinputChange(event){
        this.setState({firstname:event.target.value});

    }
    lastnameinputChange(event){
        this.setState({lastname:event.target.value});

    }
    ageinputChange(event){
        this.setState({age:event.target.value});

    }
    emailinputChange(event){
        this.setState({email:event.target.value});

    }
    submitChange(event){
        event.preventDefault();

        axios.post(`http://localhost:8000/users`, this.state)
            .then(response => {
                if (response.status === 201){
                    window.location.reload();
                }
            })
    }

  render() {
    return (
      <div className='container'>
          <form className='new-user-form' onSubmit={event=>this.submitChange(event)}>
              <label>Username</label>
              <input type='text' name='username' onChange={event=>this.usernameinputChange(event)}></input>
              <label>Password</label>
              <input type='password' name='password' onChange={event=>this.passwordinputChange(event)}></input>
              <label>First Name</label>
              <input type='text' name='firstname' onChange={event=>this.firstnameinputChange(event)}></input>
              <label>Last Name</label>
              <input type='text' name='lastname' onChange={event=>this.lastnameinputChange(event)}></input>
              <label>Age</label>
              <input type='number' name='age' onChange={event=>this.ageinputChange(event)}></input>
              <label>Email</label>
              <input type='email' name='email' onChange={event=>this.emailinputChange(event)}></input>
              <button className='submitbtn' type='submit'>Submit</button>
          </form>
      </div>  
    )
  }
}

export default UserPost;