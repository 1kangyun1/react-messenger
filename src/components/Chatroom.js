import React, { Component } from 'react'
import socket from '../service/socket';

import UserList from './UserList';

export class Chatroom extends Component {

  state = {
    //counter provides unique id for map function in chatLog
    counter: 1,
    text: "",
    msgLog: [],
    activeUser: []
  }

  componentDidMount(){

    socket.io.on('error', function(err) {
      // handle server error here
      console.log('Error connecting to server');
    });

    socket.emit('username', {username: this.props.username});

    socket.on('message', msg => {
      this.setState({ counter: this.state.counter+1, msgLog: [...this.state.msgLog, {id: this.state.counter, msg: msg}] });
    })

    socket.on('activeUser', list => {
      this.setState({activeUser: list});
    })
  }

  chatLog = () => {
    return <div className='chatBox'>{this.state.msgLog.map((log) => {
      return <p key={log.id}>{log.msg}</p>
    })}</div>
  }

  onSubmit = (e) => {
    e.preventDefault();
    socket.emit('clientMessage', {name:this.props.username, text:this.state.text});

    this.setState({ text: "" });
  }

  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    return (
      <div style={{ textAlign:'center' }}>
        <h1>ChatRoom</h1>
        <UserList activeUser={this.activeUser} />
        {this.chatLog()}
        <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Please enter your messages ..." value={this.state.text} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}

export default Chatroom
