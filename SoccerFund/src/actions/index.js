import * as types from '../constants'

export function addEntry(data) {
  return {
    type: types.ADD_ENTRY,
    data
  }
}

export function removeEntry(id) {
  return {
    type: types.REMOVE_ENTRY,
    id
  }
}

export function editEntry(id) {
  return {
    type: types.EDIT_ENTRY,
    id
  }
}

export function saveEntry(data) {
  return {
    type: types.SAVE_ENTRY,
    data
  }
}
