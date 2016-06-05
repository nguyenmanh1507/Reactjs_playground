// ADD_DECK
// SHOW_ADD_DECK
// HIDE_ADD_DECK

const addDeck = () => ({
  type: 'ADD_DECK',
  data: name
});

const showAddDeck = () => ({type: 'SHOW_ADD_DECK'});
const hideAddDeck = () => ({type: 'HIDE_ADD_DECK'});

const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);

    default:
      return state || [];
  }
};

const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = {name: action.data, id: +new Date};
      return state.concat([newDeck]);
    default:
      return state || [];
  }
};

const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default: return !!state;
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards,
  decks
}));

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    let props = this.props;
    return (
      <div className="sidebar">
        <h2>All Decks</h2>
        <ul>
          {props.decks.map((deck, i) => {
            <li key={i}>{deck.name}</li>
          })}
        </ul>
        {props.addingDeck && <input ref="add" />}
      </div>
    );
  }
}

function run() {
  let state = store.getState();
  console.log(state);
  ReactDOM.render(
    <App>
      <Sidebar decks={[{name: 'Deck 1'}]} addingDeck={false} />
    </App>,
    document.getElementById('root')
  );
}

run();

store.subscribe(run);

window.show = () => store.dispatch(showAddDeck());
window.hide = () => store.dispatch(hideAddDeck());
window.add = () => store.dispatch(addDeck(new Date().toString()));
