import { AddTask } from './AddTask/AddTask';
import css from './App.module.css';
import { TaskDisplay } from './TaskDisplay/TaskDisplay';
export const App = () => {

  return (
    <div className={css.wrapper}>
      <AddTask />
      <TaskDisplay />
    </div>
  );
};
