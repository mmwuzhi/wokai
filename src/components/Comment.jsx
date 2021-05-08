import React, { Component } from 'react'
import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'
//import PropTypes from 'prop-types'
import axios from 'axios'

class Comment extends Component {
  // static propTypes = {
  //   data: PropTypes.any,
  // }

  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      isShowCommentList: true,
      isShowClock: true,
      style: {
        width: '105px',
        fontSize: '12px',
        marginRight: '10px',
      },
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/comments/')
      .then((res) => {
        this.setState({ comments: res.data })
      })
      // .then(() => {
      //   console.log(this.state.comments)
      // })
      .catch((err) => {
        console.log(err)
      })
  }

  handleShowOrCommentList() {
    this.setState({
      isShowCommentList: !this.state.isShowCommentList,
    })
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('ユーザ名を入力してください！')
    if (!comment.content) return alert('コメントを入力してください！')
    axios
      .post('http://localhost:5000/comments/add', comment)
      .then((res) => console.log(res.data))
      .then(this.componentDidMount.bind(this))
      .catch((err) => {
        console.log(err)
      })
  }

  handleDeleteComment(id) {
    axios
      .delete('http://localhost:5000/comments/' + id)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err)
      })

    this.setState({
      comments: this.state.comments.filter((el) => el._id !== id),
    })
  }

  render() {
    return (
      <div className='wrapper'>
        {
          // 这里的onSubmit就相当于 this.handleSubmitComment({username, content})
          // 过程:
          // ・button onClick={this.handleSubmit.bind(this)} 调用handleSubmit
          // ・handleSubmit判断onSubmit是否存在 因为存在 所以onSubmit() = onSubmit(CommentInput.state({username, content}))
          // ・所以 onSubmit() = this.handleSubmitComment({username, content})
        }
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

export default Comment
