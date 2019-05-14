import React, { Component } from 'react'

class UserInitialized extends Component {
  /* We only need tp use the constructor syntax in 2 cases:
  - Initializing the `state` - setting `state` properties to some values passed from the `props`, as shown below.
  - To bind the methods (this is done inside of the `constructor(){ IN HERE } */
  constructor(props) {
    super(props);
    this.state = {
      image: props.user.image,
      name: props.user.name
    }
  }

  render() {
    return (
      <div style={ {backgroundColor: 'purple' } } >
        <img src={this.state.image} alt="" width="300px" height="300px"/>
        <h2> Hello, { this.state.name}</h2>
      </div>
    )
  }
}

export default UserInitialized;