import { React, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TbFilePencil } from "react-icons/tb";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNewAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/newassignment`);
  };
  return (
    <div>
      <div className="row mb-3 me-5">
        <div className="col-5">
          <input
            type="text"
            placeholder="Search for Assignment"
            className="ps-3 pe-2 pt-1 pb-1 rounded-1"
            style={{ border: "1px solid lightgray" }}
          />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="row justify-content-end">
            <div className="col-3 text-end">
              <button
                type="button"
                className="ms-4 w-100 rounded-1 p-1"
                style={{ border: "1px solid lightgray" }}
              >
                <AiOutlinePlus className="me-2" />
                Group
              </button>
            </div>
            <div className="col-4 text-end">
              <button
                className="ms-3 bg-danger w-100 rounded-1 p-1"
                type="button"
                style={{ color: "white", border: "1px solid lightcoral" }}
                onClick={handleNewAssignmentClick}
              >
                <AiOutlinePlus className="me-2" />
                Assignment
              </button>
            </div>
            <div className="col-2 text-end">
              <button
                type="button"
                className="w-100 h-100 rounded-1 p-1"
                style={{ border: "1px solid lightgray" }}
              >
                <FaEllipsisVertical className="float-end me-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row me-4">
        <hr />
      </div>
      <div className="row container m-0 ps-0 pb-0 pt-0 pe-4">
        <div className="list-group">
          <div
            className="list-group-item list-group-item-secondary"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h5 className="mb-0">
              Assignments
              <span className="float-end">
                <span
                  className="rounded-5 me-3 ps-2 pe-2 pt-1 pb-1 align-content-center"
                  style={{ border: "1px solid gray", fontSize: "small" }}
                >
                  40% of Total
                </span>
                <AiOutlinePlus className="float-end me-2">
                  <FaEllipsisVertical className="float-end me-2" />
                </AiOutlinePlus>
              </span>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="container collapse show m-0 p-0"
            style={{ borderLeft: "4px solid rgb(80, 166, 80)" }}
          >
            {assignments
              .filter((assignment) => assignment.course === courseId)
              .map((assignment, index) => (
                <div
                  className="list-group-item align-items-center"
                  style={{ display: "flex" }}
                >
                  <div className="float-left" style={{ width: "10%" }}>
                    <TbFilePencil
                      className="float-start"
                      style={{ color: "#b5eeb4" }}
                      size="30px"
                    />
                  </div>
                  <div
                    className="float-none remove-links-for-ass-name"
                    style={{ width: "70%" }}
                  >
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="remove-links-for-ass-name"
                    >
                      <a
                        href="edit.html"
                        style={{ fontSize: 18, fontWeight: "500" }}
                      >
                        {assignment._id} - {assignment.title}
                      </a>
                    </Link>
                    <h6 style={{ fontSize: 14, color: "darkslategray" }}>
                      {assignment.description}
                    </h6>
                    <p style={{ fontSize: "small" }}>
                      <b>Available: </b>
                      {assignment.availableFromDate} | <b>Until: </b>
                      {assignment.availableUntilDate} | <b>Due: </b>{" "}
                      {assignment.due} | {assignment.points} pts
                    </p>
                  </div>
                  <div
                    className="float-right align-items-top"
                    style={{ width: "20%" }}
                  >
                    <button
                      onClick={() => {
                        const userConfirmed = window.confirm(
                          "Are you sure you want to delete this assignment?"
                        );
                        if (userConfirmed) {
                          dispatch(deleteAssignment(assignment._id));
                        }
                      }}
                      className="btn btn-danger me-2 float-end"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
