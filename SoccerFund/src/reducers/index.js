import * as types from '../constants'

const initialState = {
  total: 0,
  entries: [
    {
      id: 1234567890,
      date: '09-02-2016',
      type: 'earn',
      amount: 10,
      note: 'Stadium fee'
    },
    {
      id: 1244467890,
      date: '09-15-2016',
      type: 'expense',
      amount: 20,
      note: 'Stadium fee'
    }
  ]
}

const entries = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ENTRY:
      return Object.assign({}, state, {
        entries: [
          Object.assign({}, {
            id: +Date.now()
          }, action.data),
          ...state.entries
        ]
      })

    case types.SAVE_ENTRY:
      return Object.assign({}, state, {
        entries: state.entries.map(entry => {
          if (entry.id === action.data.id) {
            return Object.assign({}, entry, action.data)
          }

          return entry
        })
      })

    case types.EDIT_ENTRY:
    case types.REMOVE_ENTRY:
      return action.id

    default:
      return state
  }
}

export default entries
