import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/300x300" alt="Weather Icon" />
          <div className="caption">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge"><i className="fa fa-clock-o"></i></span>
                {this.props.dateTime}
              </li>
              <li className="list-group-item">
                <span className="badge">&deg;C</span>
                {this.props.temp}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
