export const Task = () => {
  const taskCompleted = true;
  const taskName = "Name of task";
  const handleToggle = () => {
    console.log('aaa');
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
        {taskName}
      </label>
    </div>
  </li>
}