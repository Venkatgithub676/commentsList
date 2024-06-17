// Write your code here

import './index.css'

const CommentItem = props => {
  const {each, method, classes} = props
  const {name, cmt} = each
  const initial = name.slice(0, 1)
  const randomNum = Math.floor(Math.random() * classes.length)
  const bgItem = classes[randomNum]

  return (
    <li className="li-con">
      <p className={`${bgItem} initial`}>{initial}</p>
      <div className="name-cmt-con">
        <div className="name-con">
          <h1 className="name">{name}</h1>
          <p className="time">{method(new Date())}</p>
        </div>
        <p className="cmt">{cmt}</p>
      </div>
    </li>
  )
}

export default CommentItem
