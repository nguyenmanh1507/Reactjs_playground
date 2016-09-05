import React from 'react'

const Entry = (entry) => (
  <tr key={entry.id} className={(entry.type === 'earn') ? 'success' : 'danger'}>
    <td>{entry.date}</td>
    <td>{`${(entry.type === 'earn') ? '+' : '-'} ${entry.amount}`}</td>
    <td>{entry.type}</td>
    <td>{entry.note}</td>
  </tr>
)

export default Entry
