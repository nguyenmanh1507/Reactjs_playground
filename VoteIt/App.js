import React from 'react';
import Form from './components/Form';
import VoteItem from './components/VoteItem';
import VoteList from './components/VoteList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false,
      feeds: []
    }

    this.vote = this.vote.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  loadData() {
    let ref = new Firebase('https://ngmanhvoteit.firebaseio.com/feed');
    ref.on('value', snap => {
      let items = [];
      let sorted = [];

      snap.forEach(function(itemSnap) {
        let item = itemSnap.val();
        item.key = itemSnap.key();
        items.push(item);
      });

      this.setState({
        feeds: items
      });

    });
  }

  componentDidMount() {
    this.loadData();
  }

  toggleForm() {
    this.setState({
      display: !this.state.display
    });
  }

  addNew(newVoteItem) {
    this.setState({
      feeds: this.state.feeds.concat(newVoteItem)
    });
  }

  vote(newFeed) {
    let feeds = this.state.feeds;
    let index = _.findIndex(feeds, function(feed) {
      return feed.id === newFeed.id;
    });

    feeds[index] = _.merge(feeds[index], newFeed);

    feeds = _.merge(feeds, feeds[index]);

    this.setState({
      feeds: feeds
    });
  }

  render() {
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
}

export default App;
