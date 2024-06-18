// Write your code here

import './index.css'

const CommentItem = props => {
  const {each, method, likeBtn, delBtn} = props
  const {name, cmt, isLiked, id, initialClassName} = each
  const initial = name.slice(0, 1)

  const likeOrUnlikeTxt = isLiked ? 'liked-text' : ''
  const likeOrUnlikeBtn = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => {
    likeBtn(id)
  }

  const onClickDelBtn = () => {
    delBtn(id)
  }
  return (
    <li className="li-con">
      <div className="main-cmt-con">
        <p className={`${initialClassName} initial`}>{initial}</p>
        <div className="name-cmt-con">
          <div className="name-con">
            <h1 className="name">{name}</h1>
            <p className="time">{method(new Date())}</p>
          </div>
          <p className="cmt">{cmt}</p>
        </div>
      </div>
      <div className="like-del-con">
        <div className="like-img-con">
          <button
            id="like"
            type="button"
            onClick={onClickLikeBtn}
            className="like-btn"
          >
            <img
              src={likeOrUnlikeBtn}
              alt="like"
              className={`like-img ${likeOrUnlikeBtn}`}
            />
          </button>
          <label htmlFor="like" className={`like-text ${likeOrUnlikeTxt}`}>
            Like
          </label>
        </div>
        <button
          className="delete-btn"
          onClick={onClickDelBtn}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
