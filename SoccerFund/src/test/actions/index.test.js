import expect from 'expect'
import * as actions from '../../actions'
import * as types from '../../constants'

describe('actions', () => {
  it('should create an action to add an entry', () => {
    const data = {
      id: '213324457',
      date: '07-15-2016',
      type: 'earn',
      amount: 10,
      note: 'MMJ sponsor'
    }
    const expectedAction = {
      type: types.ADD_ENTRY,
      data
    }
    expect(actions.addEntry(data)).toEqual(expectedAction)
  })

  it('should create an action to remove an entry', () => {
    const id = '1234567890'
    const expectedAction = {
      type: types.REMOVE_ENTRY,
      id
    }
    expect(actions.removeEntry(id)).toEqual(expectedAction)
  })

  it('should create an action to edit an entry', () => {
    const id = '32134346'
    const expectedAction = {
      type: types.EDIT_ENTRY,
      id
    }
    expect(actions.editEntry(id)).toEqual(expectedAction)
  })

  it('should create an action to save entry', () => {
    const data = {
      id: '213324457',
      date: '07-15-2016',
      type: 'earn',
      amount: 10,
      note: 'MMJ sponsor'
    }
    const expectedAction = {
      type: types.SAVE_ENTRY,
      data
    }
    expect(actions.saveEntry(data)).toEqual(expectedAction)
  })
})
