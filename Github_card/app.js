/** @jsx React.DOM */
'use strict';

var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    var component = this;
    $.get('https://api.github.com/users/' + this.props.login, function(data) {
      component.setState(data);
    });
  },
  render: function() {
    var data = this.state;

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
});

var Form = React.createClass({
  getInfo: function(e) {
    // prevent form submit
    e.preventDefault();
    // find input
    var userName = React.findDOMNode(this.refs.login);
    // Add new user
    if(userName.value.match(/\S/)) {
      this.props.addUser(userName.value);
    }

    // reset input text field
    userName.value = '';

  },
  render: function() {
    return (
      <form action="/" onSubmit={this.getInfo} className="col-sm-6">

        <div className="form-group">
          <label className="control-label">Enter GitHub username</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-github"></i></span>
            <input type="text" className="form-control" ref="login" placeholder="Please enter username" />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">Add</button>
            </span>
          </div>
        </div>

      </form>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {
      logins: []
    };
  },
  addUser: function(addToLogin) {
    // add new username to logins array
    this.setState({
      logins: this.state.logins.concat(addToLogin)
    });
  },
  render: function() {
    var cards = this.state.logins.map(function(i) {
      return (
        <Card login={i} />
      );
    });

    return (
      <div className="container">
        <div className="well row">
          <Form addUser={this.addUser} />
        </div>
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
});

var mainComponent = React.render(<Main />, document.getElementById('app'));
