import * as types from '../constants'

const entries = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ENTRY:
      return [
        Object.assign({}, {
          id: +Date.now()
        }, action.data),
        ...state
      ]

    case types.SAVE_ENTRY:
      return state.map(entry => {
        if (entry.id === action.data.id) {
          return Object.assign({}, entry, action.data)
        }

        return entry
      })

    case types.EDIT_ENTRY:
    case types.REMOVE_ENTRY:
      return action.id

    default:
      return state
  }
}

export default entries
