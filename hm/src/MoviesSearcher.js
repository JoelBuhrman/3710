import React, { Component } from 'react'
import {fetchMovieTitles} from './api'
import {SearchBar, SearchHistory, SearchSuggestions} from './components'
import {formatDate, shouldCallAPI} from './utils'
import uuidv1 from 'uuid/v1'


class MoviesSearcher extends Component {

  constructor(){
    super()
    this.state = {
      history: [],
      suggestions: [],
    }
  }
  
  timoutFunction = () => {}

  getMovieTitles = event => {
    clearTimeout(this.timoutFunction)
    const value = event.target.value
    if(shouldCallAPI(value)){
      this.timoutFunction = setTimeout( async () => { 
        const titles =  await fetchMovieTitles(value)
        this.setState({
            suggestions: titles,
        }) 
      }, 250) 
    }
  }

  getSuggestions = event => {
    const value = event.target.value
    if(shouldCallAPI(value)){
      this.getMovieTitles(event)
    }
    else{
      this.clearSuggestions()
    }
  }

  addToHistory = value => this.setState({
    history: [
      ...this.state.history,
      {
        title: value,
        timeStamp: formatDate(new Date()),
        id: uuidv1(),
      },
    ]
  })

  clearHistory = () => this.setState({history: []})

  clearSuggestions = () => this.setState({suggestions: []})
  
  deleteOption = id => this.setState({
    history: this.state.history.filter(historyObject => historyObject.id !== id)
  })

  render() {
    return (
      <div className="container">
        <SearchBar onChange={this.getSuggestions} clearSuggestions={this.clearSuggestions}/>
        <SearchSuggestions suggestions={this.state.suggestions} addToHistory={this.addToHistory} />
        <SearchHistory searchHistory={this.state.history} clearHistory={this.clearHistory} deleteOption={this.deleteOption} />
      </div>
    )
  }
}


export default MoviesSearcher
