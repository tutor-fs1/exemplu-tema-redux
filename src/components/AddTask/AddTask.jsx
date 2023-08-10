export const AddTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.contactName.value;
    const category = form.elements.category.value;
    console.log(name);
    console.log(category);
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
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="category">Works with selects</label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
}