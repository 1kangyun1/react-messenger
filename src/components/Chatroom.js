import React, { Component } from 'react'
import socket from '../service/socket';

import './css/ChatRoom.css';

import UserList from './UserList';
import ChatBox from './ChatBox';

export class Chatroom extends Component {

  state = {
    //counter provides unique id for map function in chatLog
    counter: 1,
    input: "",
    msgLog: [],
    activeUser: []
  }

  componentDidMount(){

    socket.io.on('error', function(err) {
      // handle server error here
      console.log('Error connecting to server');
    });

    socket.emit('username', {username: this.props.username});

    socket.on('message', ({username, text, time}) => {
      this.setState({ counter: this.state.counter+1, msgLog: [...this.state.msgLog, {id: this.state.counter, 
        username: username, text: text, time:time}] });
    })

    socket.on('activeUser', list => {
      this.setState({activeUser: list});
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    socket.emit('clientMessage', {name:this.props.username, text:this.state.input});

    this.setState({ input: "" });
  }

  onChange = (e) => this.setState({ input: e.target.value });

  render() {
    return (
      <div className='chat-container'>
        <header className='chat-header'>
          <h1>ChatRoom</h1>
        </header>
        <main className='chat-main'>
          <UserList activeUser={this.state.activeUser} />
          <ChatBox msgLog={this.state.msgLog} />
        </main>
        <div className='chat-form-container'>
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Please enter your messages ..." value={this.state.input} onChange={this.onChange}/>
          </form>
        </div>
      </div>
    )
  }
}

export default Chatroom
