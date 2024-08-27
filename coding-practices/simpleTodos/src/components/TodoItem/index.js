// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteTodo} = props
  const {title, id} = userDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p className="topic-title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
