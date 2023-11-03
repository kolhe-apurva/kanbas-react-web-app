import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import "../index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { useEffect } from "react";
function AssignmentEditor() {
  let { assignmentId } = useParams();
  let assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  let { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (newassignment) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment({ ...assignment, course: courseId }));
    }
    navigate(-1);
  };

  let newAssignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  console.log("id is " + assignmentId);
  console.log(assignments);
  let assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  let newassignment = assignmentId === "newassignment";
  if (newassignment) {
    assignment = newAssignment;
  }
  const handleAssignmentChange = (field, value) => {
    dispatch(setAssignment({ ...assignment, [field]: value }));
  };
  console.log(assignment);
  return (
    <div>
      <li className="list-group-item">
        <div className="row p-2">
          <h5>Modify Assignments</h5>
          <hr />
        </div>
      </li>
      <hr className="mt-2" />
      <div className="row pe-5">
        <div className="col-12 float-end">
          <button type="button" className="btn btn-light ms-2 float-end">
            <BsThreeDotsVertical />
          </button>
          <button
            type="button"
            className="btn mb-1 float-end text-success fw-bold"
            style={{ border: 0 }}
          >
            <BsCheckCircle className="me-1" />
            Published
          </button>
        </div>
      </div>
      <div className="row mt-3 me-3 ps-2 pe-4">
        <hr />
      </div>
      <div className="container ps-2 pe-5">
        <div
          className="row d-flex flex-row container mt-0 ms-0 me-0 mb-2"
          key={assignment._id}
        >
          <div className="col-12">
            <div className="row  mt-3">
              <div className="col-2 input-box">
                <label>Title</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={assignment.title}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, title: e.target.value })
                    )
                  }
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 input-box">
                <label>Description</label>
              </div>
              <div className="col-10 input-box">
                <textarea
                  value={assignment.description}
                  onChange={(e) =>
                    handleAssignmentChange("description", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 input-box">
                <label>Points</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={assignment.points}
                  onChange={(e) =>
                    handleAssignmentChange("points", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 input-box">
                <label>Due Date</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={assignment.due}
                  type="date"
                  onChange={(e) =>
                    handleAssignmentChange("due", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 input-box">
                <label>Available From Date</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={assignment.availableFromDate}
                  type="date"
                  onChange={(e) =>
                    handleAssignmentChange("availableFromDate", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 input-box">
                <label>Available Until Date</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={assignment.availableUntilDate}
                  type="date"
                  onChange={(e) =>
                    handleAssignmentChange("availableUntilDate", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="float-end">
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger me-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
