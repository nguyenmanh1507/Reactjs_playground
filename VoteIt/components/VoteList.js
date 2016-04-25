import React from 'react';
import VoteItem from './VoteItem';

class VoteList extends React.Component {
  render() {
    let feeds = this.props.feeds.map(feed => {
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
    });

    return (
      <ul className="vote-list">
        {feeds}
      </ul>
    );
  }
}

export default VoteList;
