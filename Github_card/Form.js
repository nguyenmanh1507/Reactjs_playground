import React from 'react';

class Form extends React.Component {

  getInfo(e) {
    // Prevent form submit
    e.preventDefault();

    // Find input
    let userName = React.findDOMNode(this.refs.login);

    // Add new user
    if (userName.value.match(/\S/) && this.props.login.indexOf(userName.value)) {
      this.props.addUser(userName.value);
    }

    // Reset form
    userName.value = '';
  }

  render() {
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
}

export default Form;
