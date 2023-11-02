import React from "react";
import { Link, useParams } from "react-router-dom";
import { TbFilePencil } from "react-icons/tb";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

import db from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
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
            {courseAssignments.map((assignment, index) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item pt-1 pb-1 ps-4 pe-4 align-items-center"
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
                  <a
                    href="edit.html"
                    style={{ fontSize: 18, fontWeight: "500" }}
                  >
                    {assignment._id} - {assignment.title}
                  </a>
                  <p style={{ fontSize: "small" }}>
                    <b>Due</b> {assignment.due} | {assignment.points} pts
                  </p>
                </div>
                <div
                  className="float-right align-items-top"
                  style={{ width: "20%" }}
                >
                  <FaEllipsisVertical className="float-end me-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    /*<div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>*/
  );
}
export default Assignments;
