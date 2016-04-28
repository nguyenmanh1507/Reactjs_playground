import React from 'react';
import Weather from './weather';

class WeatherList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {

    $.getJSON('http://localhost:3000/list')
      .done(data => {
        this.setState({
          list: data
        });
      }).fail(error => {
        console.log(error);
      })
    ;
  }

  render() {
    let weathers = this.state.list.map(weather => {
      return (
        <Weather
          key={weather.dt}
          dateTime={weather.dt_txt}
          temp={weather.main.temp} />
      );
    });

    return (
      <div>
        {weathers}
      </div>
    );
  }
}

export default WeatherList;
