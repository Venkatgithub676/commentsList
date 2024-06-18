// Write your code here

import './index.css'

const CommentItem = props => {
  const {each, method, classes, likeBtn, delBtn} = props
  const {name, cmt, isLiked, id} = each
  const initial = name.slice(0, 1)
  const randomNum = Math.floor(Math.random() * classes.length)
  const bgItem = classes[randomNum]
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
        <p className={`${bgItem} initial`}>{initial}</p>
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
          <button type="button" onClick={onClickLikeBtn} className="like-btn">
            <img
              id="like"
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
    </li>
  )
}

export default CommentItem
