import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    $.get('https://api.github.com/users/' + this.props.login, function(data) {
      this.setState(data);
    }.bind(this));
  }

  render() {
    let data = this.state;

    return (
      <div className="col-sm-4">

        <div className="thumbnail">
          <a href={data.html_url} target="_blank"><img src={data.avatar_url} alt={data.name} /></a>
          <div className="caption">
            <h3>{data.name}</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">{data.public_repos}</span>
                Public repos
              </li>
              <li className="list-group-item">
                <span className="badge">{data.followers}</span>
                Followers
              </li>
              <li className="list-group-item">
                <span className="badge">{data.following}</span>
                Following
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Card;
