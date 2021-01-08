import React, { Component } from 'react'

export class UserList extends Component {

  listUser = () => {
    return this.props.activeUser.map((user) => {
      return <li key={user.id}>{user.username}</li>
    });
  }

  render() {
    return (
      <div class="chat-sidebar">
        <h3>Users</h3>
        <ul id='users'>{this.listUser()}</ul>
      </div>
    )
  }
}

export default UserList
