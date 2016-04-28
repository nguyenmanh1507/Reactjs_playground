import React from 'react';
import $ from 'jquery';
import Location from './components/location';
import WeatherList from './components/weatherList';

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

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="container">

        <header class="page-header">
          <h1>Weather App</h1>
        </header>

        <Location city={this.state.city} country={this.state.country} />

        <div className="row">
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
