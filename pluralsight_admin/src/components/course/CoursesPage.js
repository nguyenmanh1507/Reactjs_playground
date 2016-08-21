import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends React.Component {
  constructor() {
    super()

    this.state = {
      course: {
        title: ''
      }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange(event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({
      course: course
    })
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
        {this.state.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <button type="submit" onClick={this.onClickSave}>Save</button>
      </div>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage)
