import React, {PropTypes} from 'react'

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
    console.log(`Saving ${this.state.course.title}`)
  }

  render() {
    return (
      <div>
        <h1>Courses Page</h1>
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

export default CoursesPage
