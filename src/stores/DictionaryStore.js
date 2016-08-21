import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constant from '../Constant'

let _def = [];

class DictionaryStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constant.RECIEVE_DEF:
          _def = action.wordArr;
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
    return _def;
  }
}

export default new DictionaryStore()
