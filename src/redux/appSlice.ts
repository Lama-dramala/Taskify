// PayloadAction нужен для типизации всех action'ов в функциях
// По сути мы просто передаём в каждый action тип PayloadAction<type>,
// где вместо type пишем что ожидаем получить в action.payload
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../types/data";

// интерфейс initialState'а
interface AppState {
  tasksList: ITask[];
}

const initialState: AppState = {
  tasksList: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<string>) {
      const newTask = { title: action.payload, id: Date.now(), isDone: false };
      state.tasksList.push(newTask);
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasksList = state.tasksList.filter((item) => item.id !== action.payload);
    },
    toggleTask(state, action: PayloadAction<number>) {
      const toggledTask = state.tasksList.find((item) => item.id === action.payload);
      if (toggledTask) {
        toggledTask.isDone = !toggledTask.isDone;
      }
    },
  },
});

export const { addNewTask, removeTask, toggleTask } = appSlice.actions;

export default appSlice.reducer;
