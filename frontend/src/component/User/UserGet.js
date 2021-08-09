import React from 'react';
import axios from 'axios';

class UserGet extends React.Component {
  state = {
    users: []
  }

    componentDidMount(){
        axios.get(`http://localhost:8000/users`)
            .then(response => {
                const users = response.data;
                this.setState({users});
            })
    }

    deleteUser(event){
        const id = parseInt(event.target.id);
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(response => {
                if (response.status === 200){
                    window.location.reload();
                }
        })  
    }

  render() {
    return (
      <div className='list-user'>
        { this.state.users.map(user =>
            <p key={user.user_id}>{user.username}<button id={user.user_id} type='button' onClick={event=>this.deleteUser(event)} key={user.user_id+1}>X</button></p>
        )}
      </div>  
    )
  }
}

export default UserGet;