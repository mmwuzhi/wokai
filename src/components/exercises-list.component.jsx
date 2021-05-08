/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link
        className="btn btn-sm btn-info font-weight-lighter"
        to={'/edit/' + props.exercise._id}
      >
        编辑
      </Link>
      <i className="fas fa-grip-lines-vertical mx-3 text-info" />
      <a
        href="#"
        className="btn btn-sm btn-danger font-weight-lighter"
        onClick={() => {
          props.deleteExercise(props.exercise._id)
        }}
      >
        删除
      </a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
  //删除
  deleteExercise(id) {
    axios
      .delete('http://localhost:5000/exercises/' + id)
      .then(res => console.log(res.data))

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3 className="mt-3 mb-5">
          <span className="bd-content-title ">锻炼日志</span>
        </h3>
        <table className="table">
          <thead>
            <tr className="text-info">
              <th>
                用户
                <i className="fas fa-user-astronaut ml-2 " />
              </th>
              <th>
                项目
                <i className="fas fa-running ml-2" />
              </th>
              <th>
                周期
                <i className="fas fa-hourglass-half ml-2" />
              </th>
              <th>
                日期
                <i className="far fa-clock ml-2" />
              </th>
              <th>
                操作
                <i className="fas fa-radiation ml-2" />
              </th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    )
  }
}
