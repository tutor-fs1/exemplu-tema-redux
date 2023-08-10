export const TaskFilters = () => {
  const filterValue = '';
  const categoryFilter = 'all';
  const handleFilterChange = () => {
    console.log();
  }
  const handleCategoryChange = (e) => {
    console.log(e.target);
  }
  const categories = [
    'all',
    'work',
    'domestic'
  ]
  return <div className='row g-3'>
    <div className="col-auto">
      <div className="form-floating mb-3">
        <input
          type="text"
          name="filter"
          className="form-control"
          value={filterValue}
          onChange={handleFilterChange}
        />
        <label htmlFor="floatingInput">Search</label>
      </div>
    </div>
    <div className="col-auto">
      <div className="form-floating">
        <select value={categoryFilter} className="form-select mb-3" id="floatingSelect" onChange={handleCategoryChange}>
          {categories.map((cat) => {
            return <option key={cat} value={cat}>{cat.toUpperCase()}</option>;
          })}
        </select>
        <label htmlFor="floatingSelect">Select category</label>
      </div>
    </div>
  </div>
}