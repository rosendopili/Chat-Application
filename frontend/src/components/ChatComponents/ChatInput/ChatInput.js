import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ChatInput.css';

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        className="ChatForm"
        required="required"
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <textarea
          className="MessageField"
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          required="required"
        ></textarea>
        <input className="Button" type="submit" value={'Send'} />
      </form>
    )
  }
}

export default ChatInput
