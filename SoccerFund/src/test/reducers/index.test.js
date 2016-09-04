import expect from 'expect'
import reducer from '../../reducers'
import * as types from '../../constants'

describe('entries reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_ENTRY', () => {
    const action1 = {
      type: types.ADD_ENTRY,
      data: {
        id: +Date.now(),
        date: '07-15-2016',
        type: 'earn',
        amount: 10,
        note: 'MMJ Sponsor',
      }
    }

    const action2 = {
      type: types.ADD_ENTRY,
      data: {
        id: +Date.now(),
        date: '07-22-2016',
        type: 'expense',
        amount: 20,
        note: 'Stadium fee'
      }
    }

    expect(reducer([], action1))
      .toEqual([action1.data])

    expect(reducer([action1.data], action2))
      .toEqual([action2.data, action1.data])
  })

  it('should handle SAVE_ENTRY', () => {
    const action = {
      type: types.SAVE_ENTRY,
      data: {
        id: 1,
        date: '07-15-2016',
        type: 'earn',
        amount: 30,
        note: 'MMJ Sponsor'
      }
    }

    const state = [
      {
        id: 0,
        date: '07-15-2016',
        type: 'earn',
        amount: 10,
        note: 'MMJ Sponsor'
      },
      {
        id: 1,
        date: '07-22-2016',
        type: 'earn',
        amount: 20,
        note: 'MMJ Sponsor'
      },
      {
        id: 2,
        date: '07-30-2016',
        type: 'expense',
        amount: 10,
        note: 'Stadium fee'
      }
    ]
    const newState = [
      {
        id: 0,
        date: '07-15-2016',
        type: 'earn',
        amount: 10,
        note: 'MMJ Sponsor'
      },
      {
        id: 1,
        date: '07-15-2016',
        type: 'earn',
        amount: 30,
        note: 'MMJ Sponsor'
      },
      {
        id: 2,
        date: '07-30-2016',
        type: 'expense',
        amount: 10,
        note: 'Stadium fee'
      }
    ]

    expect(reducer(state, action))
      .toEqual(newState)
  })

  it('should handle EDIT_ENTRY and REMOVE_ENTRY', () => {
    const action = {
      type: types.EDIT_ENTRY,
      id: 1
    }
    const state = [
      {
        id: 0,
        text: 'Learn React'
      },
      {
        id: 1,
        text: 'Learn Redux'
      },
      {
        id: 2,
        text: 'Code, Code, Code...'
      }
    ]
    expect(reducer(state, action))
      .toEqual(action.id)
  })
})
