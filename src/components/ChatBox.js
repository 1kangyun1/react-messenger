import React, { Component } from 'react';

export class ChatBox extends Component {

  listMsgs = () => {
    return this.props.msgLog.map((msg) => {
      return <div className='message' key={msg.id}>
        <p className='meta'>
          {msg.username+ ' '}
          <span>
            {msg.time}
          </span>
        </p>
        <p className='text'>
          {msg.text}
        </p>      
      </div>
    });
  }

  render() {
    return (
      <div className='chat-messages'>{this.listMsgs()}</div>
    )
  }
}

export default ChatBox
