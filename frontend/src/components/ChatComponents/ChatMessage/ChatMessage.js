import React from 'react';
import './ChatMessage.css';

const chatMessage = (props) => {

  return (
    <div className="MessageBox">
      <strong>{props.name}</strong> <p>{props.message}</p>
    </div>

  )
}


export default chatMessage;
