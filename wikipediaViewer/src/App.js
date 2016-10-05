import React, { Component } from 'react';
import { getJSON } from 'jquery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      entries: [],
    }

    this.api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='
    this.cb = '&callback=?'
    this.page = 'https://en.wikipedia.org/?curid='

    this.searchEntry = this.searchEntry.bind(this)
  }

  // componentDidMount() {
  //   const url = `${this.api}dog${this.cb}`
  //   getJSON(url, data => {
  //     console.log(data.query.pages)
  //     this.setState({ entries: data.query.pages })
  //   })
  // }

  getEntries(entry = '') {
    const url = `${this.api}${entry}${this.cb}`
    getJSON(url, data => {
      console.log(data.query.pages)
      this.setState({ entries: data.query.pages })
    })
  }

  searchEntry(evt) {
    evt.preventDefault()
    this.getEntries(this.searchInput.value)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form className="App-intro" onSubmit={this.searchEntry}>
          <input type="search" ref={ref => { this.searchInput = ref }} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {Object.keys(this.state.entries).map(key => (
            <li key={key}>
              <a href={this.page + this.state.entries[key].pageid} target="_blank" rel="noopener noreferrer">{this.state.entries[key].extract}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
