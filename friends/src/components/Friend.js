import React, { Component } from 'react';

export default class Friend extends Component {
  render() {
    const {
      name,age, email
    } = this.props.friend;
    return (
      <div>
          <h2>{name}</h2>
          <h3>{age}</h3>
          <h3>{email}</h3>
        <hr />
      </div>
    )
  }
}
