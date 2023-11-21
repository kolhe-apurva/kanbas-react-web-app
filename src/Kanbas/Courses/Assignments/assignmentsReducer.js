import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: [],
  assignment: {
    _id: "Id",
    title: "Enter Title here",
    description: "Enter Description here",
    points: "0",
    due: "2023-01-01",
    availableFromDate: "2023-01-01",
    availableUntilDate: "2023-01-01",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments?.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments?.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    resetAssignment: (state, action) => {
      state.assignment = {
        _id: "Id",
        title: "Enter Title here",
        description: "Enter Description here",
        points: "0",
        due: "2023-01-01",
        availableFromDate: "2023-01-01",
        availableUntilDate: "2023-01-01",
      };
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  resetAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
