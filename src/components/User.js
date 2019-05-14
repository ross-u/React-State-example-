import React from 'react'

function user(props) {
  return (
    <div style={ {backgroundColor: props.color } } >

      {/*  */}
      <img src={props.image} alt="" width="300px" height="300px"/>
      <h2> Hello, { props.firstName}</h2>
    </div>
  )
}

export default user
