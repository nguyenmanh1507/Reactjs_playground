import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Form from './Form';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      logins: []
    };
  }

  addUser(addToLogin) {
    // add new username to logins array
    this.setState({
      logins: this.state.logins.concat(addToLogin)
    });
  }

  render() {
    var key = 0;
    let cards = this.state.logins.map(i => {
      key++;
      return (
        <Card login={i} key={key} />
      );
    });

    return (
      <div className="container">
        <div className="well row">
          <Form addUser={this.addUser.bind(this)} logins={this.state.logins} />
        </div>
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
