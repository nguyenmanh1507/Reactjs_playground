import React from 'react';

class Location extends React.Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title">Location</h2>
        </div>
        <div className="panel-body">
          City: {this.props.city} - Country: {this.props.country}
        </div>
      </div>
    );
  }
}

export default Location;
