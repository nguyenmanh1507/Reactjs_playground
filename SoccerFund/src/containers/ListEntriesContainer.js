import { connect } from 'react-redux'
import ListEntries from '../components/ListEntries'

function mapStateToProps(state) {
  return state
}

const ListEntriesContainer = connect(mapStateToProps)(ListEntries)

export default ListEntriesContainer
