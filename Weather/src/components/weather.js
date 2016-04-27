import React from 'react';

class Weather extends React.Component {
  render() {
    let main = this.props.list.main;
    return (
      <div className="thumbnail">
        <img src="http://placehold.it/300x300" alt="Weather Icon" />
        <div className="caption">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge"><i className="fa fa-clock-o"></i></span>
              {this.props.list.dt_txt}
            </li>
            <li className="list-group-item">
              <span className="badge">&deg;C</span>
              {main.temp_min} - {main.temp_max}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Weather;
