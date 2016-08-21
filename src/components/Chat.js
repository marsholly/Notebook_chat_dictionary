import React, { Component } from 'react'
const moment = require('moment');
import '../css/style.css'

export default class Chat extends Component {
  render(){
    let { user_name, time_stamp, message } = this.props.chat

    let time = moment(time_stamp).format('LT')
    let chatMsg = (<span>{time}@ {user_name}: </span>)

    if(user_name === this.props.user){
      return(
        <div className="leftcolor form-control">
        <span className="left">
          @{user_name} ({time}): {message}
        </span>
        </div>
      )
    }else{
      return(
        <div className="rightcolor form-control">
        <span className="right">
          {message} @{user_name} ({time})
        </span>
        </div>
      )
    }
  }
}
