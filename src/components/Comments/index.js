import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', cmt: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {name, cmt} = this.state

    const newObj = {id: uuidv4(), name, cmt}
    console.log(newObj)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newObj],
      name: '',
      cmt: '',
    }))
  }

  onChangeTextarea = event => {
    this.setState({cmt: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsList, name, cmt} = this.state
    console.log(commentsList)
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="comments-heading">Comments</h1>
          <div className="comment-img-con">
            <form className="comment-con" onSubmit={this.onSubmitForm}>
              <p className="say-para">Say something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="text-input"
                onChange={this.onChangeName}
                value={name}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                rows="7"
                cols="30"
                onChange={this.onChangeTextarea}
                className="text-area"
                value={cmt}
              />
              <br />
              <button
                onClick={this.onClickAddCmt}
                type="submit"
                className="add-cmnt-btn"
              >
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="cheer-img"
            />
          </div>
          <hr />
          <div className="cmt-section-con">
            <p className="no-of-cmt">0</p>
            <p className="cmt-label">Comments</p>
          </div>
          <ul className="ul-con">
            {commentsList.map(each => (
              <CommentItem
                each={each}
                key={each.id}
                method={formatDistanceToNow}
                classes={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
