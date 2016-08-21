import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constant from '../Constant'
import io from 'socket.io-client'

let _messages = [];
let socket = io()

class ChatStore extends EventEmitter{
  constructor(){
    super();
    // AppDispatcher.register(action =>{
    //   switch(action.type){
    //     case Constant.RECIEVE_NOTES:
    //       _notes = action.notes;
    //       this.emit('CHANGE');
    //       break;
    //   }
    // });
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
