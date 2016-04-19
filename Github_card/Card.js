import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    $.get(`https://api.github.com/users/${this.props.login}?access_token=4fe569e02ea39143663da766a7fd0930d619f44f`, data => {
      data.notFound = false;
      this.setState(data);
    })
    .fail(error => {
      this.setState({
        notFound: true
      });
    });
  }

  render() {
    let data = this.state;

    if (!this.state.notFound) {
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
    } else {
      return false;
    }
  }
}

export default Card;
