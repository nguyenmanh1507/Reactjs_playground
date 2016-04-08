var Form = React.createClass({
  addNew: function(e) {
    e.preventDefault();
    let newVoteItem = {
      key: parseInt(this.props.feeds.length) + 1,
      id: parseInt(this.props.feeds.length) + 1,
      title: this.refs.voteTitle.value,
      desc: this.refs.voteDesc.value,
      point: 0
    }

    this.refs.form.reset();

    this.props.addNew(newVoteItem);
    this.props.toggleForm();
  },
  render: function() {
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
            <input type="text" ref="voteDesc" className="form-control" placeholder="Vote Description" />
          </div>
          <button className="btn btn-success btn-block" type="submit" onClick={this.addNew}>Add</button>
        </form>
      </div>
    );
  }
});

var VoteItem = React.createClass({
  voteUp: function() {
    let newFeed = {
      id: this.props.id,
      title: this.props.title,
      desc: this.props.desc,
      point: this.props.point + 1
    };
    this.props.vote(newFeed);
  },
  voteDown: function() {
    let newFeed = {
      id: this.props.id,
      title: this.props.title,
      desc: this.props.desc,
      point: this.props.point - 1
    };
    this.props.vote(newFeed);
  },
  render: function() {
    return (
      <li className="vote-item">
        <div className="text">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
        <div className="vote-score">{this.props.point}</div>
        <div className="action">
          <button className="btn btn-success" onClick={this.voteUp}><i className="fa fa-arrow-up"></i></button>
          <button className="btn btn-success" onClick={this.voteDown}><i className="fa fa-arrow-down"></i></button>
        </div>
      </li>
    );
  }
});

var VoteList = React.createClass({
  render: function() {
    let feeds = this.props.feeds.map(function(feed) {
      return (
        <VoteItem
          key={feed.key}
          id={feed.id}
          title={feed.title}
          desc={feed.desc}
          point={feed.point}
          vote={this.props.vote}
        />
      );
    }.bind(this));
    return (
      <ul className="vote-list">
        {feeds}
      </ul>
    );
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {
      display: false,
      feeds: [
        {
          key: 1,
          id: 1,
          title: 'JavaScript is awesome',
          desc: 'You can create cool app with JavaScript',
          point: 9
        },
        {
          key: 2,
          id: 2,
          title: 'Frontend Developer really cool',
          desc: 'Every day has new thing to learn',
          point: 4
        },
        {
          key: 3,
          id: 3,
          title: 'PostCSS is amazing',
          desc: 'Help me a lot. I can write really cool things',
          point: 12
        },
        {
          key: 4,
          id: 4,
          title: 'Frontend tools change every day',
          desc: 'Keep myself up-to-date is really hard',
          point: 7
        }
      ]
    };
  },
  toggleForm: function() {
    this.setState({
      display: !this.state.display
    });
  },
  addNew: function(newVoteItem) {
    this.setState({
      feeds: this.state.feeds.concat(newVoteItem)
    });
  },
  vote: function(newFeed) {
    let feeds = this.state.feeds;
    let index = _.findIndex(feeds, function(feed) {
      return feed.id === newFeed.id;
    });

    feeds[index] = _.merge(feeds[index], newFeed);

    feeds = _.merge(feeds, feeds[index]);

    this.setState({
      feeds: feeds
    });

  },
  render: function() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">

            <Form
              display={this.state.display}
              toggleForm={this.toggleForm}
              addNew={this.addNew}
              feeds={this.state.feeds}
            />

          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <VoteList
              feeds={this.state.feeds}
              vote={this.vote}
            />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
