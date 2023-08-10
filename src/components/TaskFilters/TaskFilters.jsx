import { useSelector } from "react-redux";
import { categoriesForFilter } from "redux/constants";
import { useDispatch } from "react-redux";
import { changeTextFilter, changeCategoryFilter, changeStatusFilter } from "redux/filtersSlice";
import { completedFilters } from "redux/constants";

export const TaskFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const handleFilterChange = (e) => {
    const name = e.target.value;
    dispatch(changeTextFilter(name));
  }
  const handleCategoryChange = (e) => {
    dispatch(changeCategoryFilter(e.target.value));
  }
  const handleStatusChange = (e) => {
    const status = e.target.value;
    dispatch(changeStatusFilter(status));
  }

  return <div className='row g-3'>
    <div className="col-auto">
      <div className="form-floating mb-3">
        <input
          type="text"
          name="filter"
          className="form-control"
          value={filters.textFilter}
          onChange={handleFilterChange}
        />
        <label htmlFor="floatingInput">Search</label>
      </div>
    </div>
    <div className="col-auto">
      <div className="form-floating">
        <select value={filters.categoryFilter} className="form-select mb-3" id="floatingSelect" onChange={handleCategoryChange}>
          {categoriesForFilter.map((cat) => <option key={cat} value={cat}>{cat.toUpperCase()}</option>)}
        </select>
        <label htmlFor="floatingSelect">Select category</label>
      </div>
    </div>
    <div className="col-auto">
      <div className="form-floating">
        <select value={filters.statusFilter} className="form-select mb-3" id="floatingSelect" onChange={handleStatusChange}>
          {completedFilters.map((s) => <option key={s} value={s}>{s.toUpperCase()}</option>)}
        </select>
        <label htmlFor="floatingSelect">Select status</label>
      </div>
    </div>
  </div>
}