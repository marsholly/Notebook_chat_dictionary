import React, { Component } from 'react'
import DictionaryAction from '../actions/DictionaryAction'
import DictionaryStore from '../stores/DictionaryStore'

export default class Dictionary extends Component {
  constructor(){
    super();
    this.state = {
      searchWord: '',
      currentWord: '',
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
    this.setState({currentWord: searchWord.searchWord})
    DictionaryAction.getDefinition(searchWord);
    this.setState({searchWord: ''})
  }
  render(){
    let defArr = this.state.def
    let defObj = defArr[0];
    let word = this.state.currentWord.toUpperCase()
    let definitions
    if(this.state.def.length){
      definitions = (
        <div className="defWord">
          <h3>{word} || Definition:</h3>
          <span>{defObj.defenition}</span>
        </div>)
      } else {
      definitions = (<div></div>)
      }
    return(
      <div>
        <h1>Dictionary</h1>
        <div className="row">
          <form className="navbar-form navbar-left" onSubmit={this.sendWord}>
            <div className="form-group" >
              <input className="form-control" value={this.state.searchWord} onChange={this.changeWord} placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>

        </div>
        <div className='row'>
          {definitions}
        </div>
      </div>
    )
  }
}
