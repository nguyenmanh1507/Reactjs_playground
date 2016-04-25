import React from 'react';

class VoteItem extends React.Component {
  constructor() {
    super();
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }
  voteUp() {
    let newFeed = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      voteCount: this.props.voteCount + 1
    };
    this.props.vote(newFeed);
  }

  voteDown() {
    let newFeed = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      voteCount: this.props.voteCount - 1
    };
    this.props.vote(newFeed);
  }

  render() {
    return (
      <li className="vote-item">
        <div className="text">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
        <div className="vote-score">{this.props.voteCount}</div>
        <div className="action">
          <button className="btn btn-success" onClick={this.voteUp}><i className="fa fa-arrow-up"></i></button>
          <button className="btn btn-success" onClick={this.voteDown}><i className="fa fa-arrow-down"></i></button>
        </div>
      </li>
    );
  }
}

export default VoteItem;
