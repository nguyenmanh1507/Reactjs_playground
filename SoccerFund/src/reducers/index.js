import * as types from '../constants'

const initialState = {
  total: 0,
  entries: []
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
