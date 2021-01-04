import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

export class Chatroom extends Component {
  ENDPOINT = "http://localhost:9000/"
  socket = socketIOClient(this.ENDPOINT);

  state = {
    //counter provides unique id for map function in chatLog
    counter: 1,
    text: "",
    msgLog: [],
    userList: []
  }

  componentDidMount(){
    this.socket.emit('username', {username: this.props.username});

    this.socket.on('message', msg => {
      this.setState({ counter: this.state.counter+1, msgLog: [...this.state.msgLog, {id: this.state.counter, msg: msg}] });
    })

    this.socket.on('userList', list => {
      this.setState({userList: list});
    })
  }

  chatLog = () => {
    return <div className='chatBox'>{this.state.msgLog.map((log) => {
      return <p key={log.id}>{log.msg}</p>
    })}</div>
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.socket.emit('clientMessage', {name:this.props.username, text:this.state.text});

    this.setState({ text: "" });
  }

  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    return (
      <div style={{ textAlign:'center' }}>
        <h1>ChatRoom</h1>
        {this.chatLog()}
        <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Please enter your messages ..." value={this.state.text} onChange={this.onChange}/>
        </form>
      </div>
    )
  }
}

export default Chatroom
