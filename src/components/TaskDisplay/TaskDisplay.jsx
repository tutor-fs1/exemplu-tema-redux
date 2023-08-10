import { NoTasks } from "components/NoTasks.jsx/NoTasks"
import { Task } from "components/Task/Task"
import { TaskFilters } from "components/TaskFilters/TaskFilters"

export const TaskDisplay = () => {
  return <div>
    <TaskFilters />
    <NoTasks />
    <ul className="list-group">
      {[1, 2, 3, 4].map((t) => <Task key={t} />)}
    </ul>
  </div>
}