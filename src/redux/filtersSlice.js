import { createSlice } from "@reduxjs/toolkit";
import { categoriesForFilter } from "./constants";
import { completedFilters } from "./constants";

const filtersInitialState = {
  textFilter: '',
  categoryFilter: categoriesForFilter[0],
  statusFilter: completedFilters[0]
}

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeTextFilter(state, action) {
      state.textFilter = action.payload;
    },
    changeCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
    changeStatusFilter(state, action) {
      state.statusFilter = action.payload;
    }
  },
});

export const { changeTextFilter, changeCategoryFilter, changeStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;