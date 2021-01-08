import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import './css/Login.css';

export class Login extends Component {

  state = {
    username: ""
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.setUsername(this.state.username);

    //redirect using warpper class withRouter's prop
    this.props.history.push('/chatroom');
  }

  onChange = (e) => this.setState({ username: e.target.value });

  render() {
    return (
      <div className='join-container' >
        <header className='join-header'>ChatRoom</header>
        <main className='join-main' >
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Please Enter Your Username ..." value={this.state.username} onChange={this.onChange}/>
            <button type='submit' className='btn'>Join Chat</button>
          </form>
        </main>
      </div>
    )
  }
}

export default withRouter(Login)
