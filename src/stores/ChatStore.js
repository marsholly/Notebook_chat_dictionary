import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constant from '../Constant'
import io from 'socket.io-client'

let _messages = [];
let socket = io()

class ChatStore extends EventEmitter{
  constructor(){
    super();

    socket.on('new message', message =>{
       _messages.push(message)
       this.emit('CHANGE');
    })
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }

  sendMsg(message){
    socket.emit('message', message)
  }

  getAll(){
    return _messages;
  }
}

export default new ChatStore()
