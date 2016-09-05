import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import AddEntryFormContainer from './containers/AddEntryFormContainer'
import ListEntriesContainer from './containers/ListEntriesContainer'

const App = (props) => (
  <div className='container'>
    <div className='row'>
    <div className='col-xs-12'>
      <nav className='navbar navbar-default'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>SoccerFund</a>
          </div>
        </nav>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12'>
        <div className='panel panel-info'>
          <div className='panel-heading'>
            <h2 className='panel-title'>Add Entry</h2>
          </div>
          <div className='panel-body'>
            <AddEntryFormContainer />
          </div>
        </div>
        <ListEntriesContainer />
      </div>
    </div>
  </div>
)

export default App
