import React, { PropTypes, Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      startDate: moment()
    }

    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    })
  }

  validateInput() {
    const _ = this
    console.log(_.state.startDate)
    if (!_.state.startDate._d || !_.refs.amount.value || !_.refs.type.value || !_.refs.note.value) {
      throw new Error('Missing field')
    }
  }

  formatInput() {
    const date = this.state.startDate._d.toLocaleDateString()
    return {
      date,
      amount: parseInt(this.refs.amount.value, 10),
      type: this.refs.type.value,
      note: this.refs.note.value
    }
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault()
        this.validateInput()

        const data = this.formatInput()
        this.props.addEntry(data)
      }}>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input type='date' ref='date' className='form-control' id='date' />
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange}
            maxDate={moment()}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Money</label>
          <input type='number' ref='amount' className='form-control' id='amount' />
        </div>
        <div className='form-group'>
          <label htmlFor='type'>Money</label>
          <select ref='type' className='form-control' id='type'>
            <option value='earn'>Earn</option>
            <option value='expense'>Expense</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='note'>Note</label>
          <input type='text' ref='note' className='form-control' id='note' />
        </div>
        <br />
        <button type='submit' className='btn btn-primary btn-block'>Add</button>
      </form>
    )
  }
}

Form.propTypes = {
  addEntry: PropTypes.func.isRequired
}

export default Form
