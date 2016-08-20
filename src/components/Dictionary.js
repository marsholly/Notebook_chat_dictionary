import React, { Component } from 'react'
import DictionaryAction from '../actions/DictionaryAction'
import DictionaryStore from '../stores/DictionaryStore'

export default class Dictionary extends Component {
  constructor(){
    super();
    this.state = {
      searchWord: '',
      def: []
    }
    this.changeWord = this.changeWord.bind(this)
    this.sendWord = this.sendWord.bind(this)
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    DictionaryStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    DictionaryStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({def: DictionaryStore.getAll()})
  }
  changeWord(e){
    this.setState({searchWord: e.target.value})
  }
  sendWord(e){
    e.preventDefault();
    let searchWord = this.state
    DictionaryAction.getDefinition(searchWord);
    this.setState({searchWord: ''})
  }
  render(){
    let defArr = this.state.def
    let defObj = defArr[0];
    console.log('defObj:', defObj)
    let definitions
    if(this.state.def){
      definitions = function(){
        console.log(defObj.defenition)
        return(
          <div>{defObj.defenition}</div>
        )
      }
    } else {
      definitions = function(){
        return (<div></div>)
      }
    }
    return(
      <div>
        <h1>Dictionary</h1>
        <form className="navbar-form navbar-left" onSubmit={this.sendWord}>
          <div className="form-group" >
            <input className="form-control" value={this.state.searchWord} onChange={this.changeWord} placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <div>
        {definitions}
        </div>
      </div>
    )
  }
}
