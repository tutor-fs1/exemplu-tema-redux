import { MdClose } from "react-icons/md";
import { removeTask, toggleCompleted } from "redux/tasksSlice";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const taskCompleted = task.completed;
  const taskName = task.text;
  const category = task.category;
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id))
  }
  const handleRemove = () => {
    dispatch(removeTask(task.id))
  }
  return <li className="list-group-item">
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name="TASKID1"
        checked={taskCompleted}
        onChange={handleToggle}
      />
      <label className="form-check-label" htmlFor="TASKID1">
        {taskName} <span className="badge bg-secondary">{category}</span>
      </label>
      <button className="btn-icon" onClick={handleRemove}>
        <MdClose size={24} />
      </button>
    </div>
  </li>
}