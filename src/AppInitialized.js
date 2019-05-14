// AppInitialized.js
import React from 'react';
import './App.css';
import User from './components/User';

class App extends React.Component {
/* We only need use the constructor syntax in 2 use cases:
  - To initialize the `state` - meaning to set `state` properties to some values passed from the `props`, as shown below.
  - To bind the methods (this is done inside of the `constructor(){ IN HERE } 
*/
  constructor(props) {
    super(props);
    this.state = {
      clickCount: props.initialValue.clickCount,
      backColor: props.initialValue.backColor, 
      userA: props.initialValue.userA,
      userB: props.initialValue.userB
    }
  }


  clickHandler = () => {
    this.setState( { clickCount: this.state.clickCount + 1 } )
  }

  render() {

    return (
      <div className="App">
        <h1>APP INITALIZED</h1>
        <p>Count is: {this.state.clickCount}</p>

        <button onClick={this.clickHandler} > + 1 </button>
        
        <User 
          firstName={this.state.userA.firstName}
          color={this.state.backColor}
          image={this.state.userA.avatarUrl}  
        />

        <User firstName={this.state.userB.firstName} image={this.state.userA.avatarUrl} />
      </div>
  );
}
}

export default App;
