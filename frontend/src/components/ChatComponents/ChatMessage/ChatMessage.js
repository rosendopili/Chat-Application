import React from 'react';
import './ChatMessage.css';

export default ({ name, message }) =>
  <div className="MessageBox">
    <strong>{name}</strong> <p>{message}</p>
  </div>
