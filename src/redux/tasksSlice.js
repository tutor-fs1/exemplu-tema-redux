import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS with Andrei", completed: true, category: 'work' },
  { id: 1, text: "Get good at JavaScript", completed: true, category: 'domestic' },
  { id: 2, text: "Master React", completed: false, category: 'work' },
  { id: 3, text: "Discover Redux", completed: false, category: 'domestic' },
  { id: 4, text: "Build amazing apps", completed: false, category: 'work' },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, category) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
            category: category
          },
        };
      },
    },
    removeTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleCompleted(state, action) {
      const taskId = action.payload;
      for (const task of state) {
        if (task.id === taskId) {
          task.completed = !task.completed;
        }
      }
    }
  },
});

export const { removeTask, addTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
