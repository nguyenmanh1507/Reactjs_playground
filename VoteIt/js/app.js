var Form = React.createClass({
  render: function() {
    return (
      <div>
        <button className="btn btn-success btn-block">Add new</button>
        <hr />
        <form>
          <div className="form-group">
            <input type="text" name="voteTitle" className="form-control" placeholder="Vote Title" />
          </div>
          <div className="form-group">
            <input type="text" name="voteDesc" className="form-control" placeholder="Vote Description" />
          </div>
          <button className="btn btn-success btn-block" type="submit">Add</button>
        </form>
      </div>
    );
  }
});

var VoteItem = React.createClass({
  render: function() {
    return (
      <li className="vote-item">
        <div className="text">
          <h3>VOTE TITLE</h3>
          <p>VOTE DESCRIPTION</p>
        </div>
        <div className="vote-score">8</div>
        <div className="action">
          <button className="btn btn-success"><i className="fa fa-arrow-up"></i></button>
          <button className="btn btn-success"><i className="fa fa-arrow-down"></i></button>
        </div>
      </li>
    );
  }
});

var VoteList = React.createClass({
  render: function() {
    return (
      <ul className="vote-list">
        <VoteItem />
      </ul>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">

            <Form />

          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <VoteList />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
