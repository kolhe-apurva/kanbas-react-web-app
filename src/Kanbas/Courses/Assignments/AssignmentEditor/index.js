import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import "../index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="row pe-5">
        <div className="col-12 float-end">
          <button type="button" class="btn btn-light ms-2 float-end">
            <BsThreeDotsVertical />
          </button>
          <button
            type="button"
            class="btn mb-1 float-end text-success fw-bold"
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
        <label className="ms-1"> Assignment Name </label>
        <input
          value={assignment.title}
          className="form-control mt-2 pt-0 mb-2"
        />
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
