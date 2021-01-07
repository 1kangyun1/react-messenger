import React, { Component } from 'react'

export class UserList extends Component {
  render() {
    return (
      <div className='userList'>{this.props.activeUser.map((user) => {
        return <p key={user.id}>{user.username}</p>
      })}</div>
    )
  }
}

export default UserList
