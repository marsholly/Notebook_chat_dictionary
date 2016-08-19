import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _notes = [];

class NoteStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_NOTES:
          _notes = action.notes;
          this.emit('CHANGE');
          break;
        case Constants.CREATE_NOTE:
          _notes.push(action.note);
          this.emit('CHANGE');
          break;
      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }

  getAll(){
    return _notes;
  }
}

export default new NoteStore()
