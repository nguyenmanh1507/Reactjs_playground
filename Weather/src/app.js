import React from 'react';
import $ from 'jquery';
import Location from './components/location';
import Weather from './components/weather';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      list: {
        main: {
          temp: null
        }
      }
    };
  }

  _getCityInfo() {
    return false;
  }

  componentWillMount() {
    $.getJSON('http://localhost:3000/city')
      .done(data => {
        this.setState({
          city: data.name,
          country: data.country
        });
      })
      .fail(error => {
        console.log(error.statusText);
      })
    ;

    $.getJSON('http://localhost:3000/list')
      .done(data => {
        this.setState({
          list: data[0]
        });
      }).fail(error => {
        console.log(error);
      })
    ;

  }

  render() {
    return (
      <div className="container">

        <header class="page-header">
          <h1>Weather App</h1>
        </header>

        <Location city={this.state.city} country={this.state.country} />

        <div className="row">
          <div className="col-md-4">
            <Weather
              key={this.state.list.dt}
              list={this.state.list}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
