// App.js
import React from 'react';
import './App.css';
import User from './components/User';
import UserInitialized from './components/UserInitialized';


class App extends React.Component {
  state = {
    clickCount: 0,
    backColor: 'yellow', 
    userA: {
      firstName: "Harper",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    }
  }
  
  /* Changing of the component `state` must be done with `setState` method 
  in order for React to re-render the component  */
  clickHandler = () => {
    this.setState( { clickCount: this.state.clickCount + 1 } )
  }
  
  //  WRONG - We should never change the state directly
  // clickHandler = () => {
    //   console.log('CLICK COUNT ', this.state.clickCount);
    //   this.state.clickCount = this.state.clickCount + 1;
    // }
  

  // You can pass this object as a prop to the `<UserInitialized>`
  userObj = {
    name: 'Uros',
    image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }

  render() {

    return (
      <div className="App">
        <p>Count is: {this.state.clickCount}</p>

        <button onClick={this.clickHandler} > + 1 </button>
        
        {/* <UserInitialized user={this.userObj}/> */}

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
