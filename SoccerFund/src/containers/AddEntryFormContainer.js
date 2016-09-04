import { connect } from 'react-redux'
import { addEntry } from '../actions'
import Form from '../components/Form'

function mapDispatchToProps(dispatch) {
  return {
    addEntry: (data) => {
      dispatch(addEntry(data))
    }
  }
}

const AddEntryFormContainer = connect(
  undefined,
  mapDispatchToProps
)(Form)

export default AddEntryFormContainer
