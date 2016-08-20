import React, { Component } from 'react'
import moment from 'moment';
import '../css/style.css'

export default class Note extends Component {
  render(){
    let { user_name, createdAt, message, _id} = this.props.note
    let date = moment(createdAt).format('lll')
    return(
    <tr>
      <div className='username'>@{user_name} || {date}</div>
      <div className='msgtext'>{message}</div>
      <div className='buttons'>
        <button className='btn btn-warning btn-xs' onClick={this.saveEdit}>
          <span className='glyphicon glyphicon-edit'></span>
        </button>
        <button className='btn btn-danger btn-xs' onClick={this.saveEdit}>
          <span className='glyphicon glyphicon-trash'></span>
        </button>
      </div>
    </tr>
    )
  }
}
