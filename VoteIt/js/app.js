var Form = React.createClass({
  addNew: function(e) {
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
            <input type="text" ref="votedescription" className="form-control" placeholder="Vote descriptionription" />
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
      description: this.props.description,
      voteCount: this.props.voteCount + 1
    };
    this.props.vote(newFeed);
  },
  voteDown: function() {
    let newFeed = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      voteCount: this.props.voteCount - 1
    };
    this.props.vote(newFeed);
  },
  render: function() {
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
});

var VoteList = React.createClass({
  render: function() {
    let feeds = this.props.feeds.map(function(feed) {
      return (
        <VoteItem
          key={feed.key}
          id={feed.id}
          title={feed.title}
          description={feed.description}
          voteCount={feed.voteCount}
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
  loadData: function() {
    var ref = new Firebase('https://ngmanhvoteit.firebaseio.com/feed');
    ref.on('value', function(snap) {
      var items = [];
      var sorted = [];

      snap.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key();
        items.push(item);
      });

      this.setState({
        feeds: items
      });

    }.bind(this));
  },
  componentDidMount: function() {
    this.loadData();
  },
  getInitialState: function() {
    return {
      display: false,
      feeds: []
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
