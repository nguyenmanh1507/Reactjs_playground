import React, { PropTypes, Component } from 'react'

class Form extends Component {
  formatInput() {
    return {
      date: this.refs.date.value,
      amount: this.refs.amount.value,
      type: this.refs.type.value,
      note: this.refs.note.value
    }
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault()
        const data = this.formatInput()
        this.props.addEntry(data)
      }}>
        <input type='date' ref='date' />
        <br />
        <input type='number' ref='amount' />
        <br />
        <select ref='type'>
          <option value='earn'>Earn</option>
          <option value='expense'>Expense</option>
        </select>
        <br />
        <input type='text' ref='note' />
        <br />
        <button type='submit'>Add</button>
      </form>
    )
  }
}

Form.propTypes = {
  addEntry: PropTypes.func.isRequired
}

export default Form
