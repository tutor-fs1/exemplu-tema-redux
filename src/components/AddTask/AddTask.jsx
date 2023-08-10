import { useDispatch } from "react-redux";
import { addTask } from "redux/tasksSlice";
import { categories } from "redux/constants";

export const AddTask = () => {
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.contactName.value;
    const category = form.elements.category.value;
    dispatch(addTask(name, category));
    form.reset();
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="form-floating mb-3">
          <input type="text" name="contactName" className="form-control" />
          <label htmlFor="contactName">Task Name</label>
        </div>
      </div>

      <div className="form-floating">
        <select className="form-select mb-3" id="floatingSelect" name="category">
          {categories.map((cat) => <option key={cat} value={cat}>{cat.toUpperCase()}</option>)}
        </select>
        <label htmlFor="category">Works with selects</label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
}