import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.addNew = this.addNew.bind(this);
  }

  addNew(e) {
    e.preventDefault();
    let newVoteItem = {
      key: parseInt(this.props.feeds.length) + 1,
      id: parseInt(this.props.feeds.length) + 1,
      title: this.refs.voteTitle.value,
      description: this.refs.votedescription.value,
      voteCount: 0
    }

    this.refs.form.reset();

    this.props.addNew(newVoteItem);
    this.props.toggleForm();
  }

  render() {
    let display = (this.props.display) ? 'block' : 'none',
        style = {
          display: display
        },
        btnClass = (this.props.display) ? 'btn btn-danger btn-block' : 'btn btn-success btn-block',
        btnText = (this.props.display) ? 'Cancel' : 'Add new'
    ;
    return (
      <div>
        <button className={btnClass} onClick={this.props.toggleForm}>{btnText}</button>
        <hr />
        <form style={style} ref="form">
          <div className="form-group">
            <input type="text" ref="voteTitle" className="form-control" placeholder="Vote Title" />
          </div>
          <div className="form-group">
            <input type="text" ref="votedescription" className="form-control" placeholder="Vote descriptionription" />
          </div>
          <button className="btn btn-success btn-block" type="submit" onClick={this.addNew}>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
