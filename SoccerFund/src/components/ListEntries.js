import React, { PropTypes } from 'react'
import Entry from './Entry'

const ListEntries = ({ entries }) => (
  <table className='table table-bordered'>
    <thead>
      <tr>
        <th>Date</th>
        <th>Money - $</th>
        <th>Type</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))
      }
    </tbody>
  </table>
)

ListEntries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ListEntries
