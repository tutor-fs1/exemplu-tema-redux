import { NoTasks } from "components/NoTasks.jsx/NoTasks"
import { Task } from "components/Task/Task"
import { TaskFilters } from "components/TaskFilters/TaskFilters"
import { useSelector } from "react-redux"
import { categoriesForFilter } from "redux/constants"
import { completedFilters } from "redux/constants"

export const TaskDisplay = () => {
  const textFilter = useSelector(state => state.filters.textFilter);
  const categoryFilter = useSelector(state => state.filters.categoryFilter);
  const statusFilter = useSelector(state => state.filters.statusFilter);
  const tasks = useSelector(state => state.tasks);
  let filteredTasks = tasks.filter((t) => t.category === categoryFilter || categoryFilter === categoriesForFilter[0]);
  filteredTasks = tasks.filter((t) => {
    if (statusFilter === completedFilters[0]) {
      return true;
    }
    if (!t.completed && statusFilter === completedFilters[1]) {
      return true;
    }
    if (t.completed && statusFilter === completedFilters[2]) {
      return true;
    }
    return false;
  });
  filteredTasks = filteredTasks.filter((t) => t.text.toLowerCase().includes(textFilter.toLowerCase()));
  return <div>
    <TaskFilters />
    {filteredTasks.length === 0 && <NoTasks />}
    <ul className="list-group">
      {filteredTasks.length > 0 && filteredTasks.map((t) => <Task key={t.id} task={t} />)}
    </ul>
  </div>
}