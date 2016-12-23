import React, {Component} from 'react'
import ThankYou from './ThankYou'

class Appointment extends React.Component{
  // console.log("SCOREEE", props)
  shouldComponentUpdate(){
    console.log("UPDATEDDDD")
    return <ThankYou />
  } 
  render() {
    return (
      <div><ThankYou /></div>)
  }
}

export default Appointment