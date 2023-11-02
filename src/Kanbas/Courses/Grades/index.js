import db from "../../Database";
import { FaGear, FaFileImport } from "react-icons/fa6";
import { BiSolidFileImport } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <div className="row mb-3 me-5 justify-content-end">
        <div className="col-2 text-center">
          <button
            type="button"
            className="w-100 rounded-1 p-1 m-0"
            style={{ border: "1px solid lightgray" }}
          >
            <FaFileImport className="pe-2" size="25" />
            Import
          </button>
        </div>
        <div className="col-2 text-center">
          <div className="dropdown">
            <button
              className="w-100 rounded-1 p-1 dropdown-toggle m-0"
              type="button"
              id="exportDropDown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ border: "1px solid lightgray" }}
            >
              <BiSolidFileImport className="pe-2" size="25" />
              Export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownExport">
              <a className="dropdown-item" onClick={() => {}}>
                ...
              </a>
            </div>
          </div>
        </div>
        <div className="col-1 text-center">
          <button
            type="button"
            className="w-50 rounded-1 p-1 m-0"
            style={{ border: "1px solid lightgray" }}
          >
            <FaGear />
          </button>
        </div>
      </div>
      <div className="row mt-1 mb-1 me-5">
        <hr className="bg-black" />
      </div>
      <div className="row mt-1 mb-1 me-5">
        <div className="col-sm-6">
          <label className="row font-weight-bold ps-4" for="StudentNameLabel">
            <b>Student Names</b>
          </label>
          <div className="row m-0 p-0">
            <div className="dropdown">
              <button
                className="w-100 rounded-1 p-1 dropdown-toggle m-0 text-center"
                type="button"
                id="studentDropDown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <FaMagnifyingGlass className="me-3" />
                Search Students
              </button>
              <div
                className="dropdown-menu float-end"
                aria-labelledby="dropdownstudent"
              >
                <a className="dropdown-item" onClick={() => {}}>
                  ...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <label
            className="row font-weight-bold ps-4"
            for="AssignmentNameLabel"
          >
            <b> Assignment Names</b>
          </label>
          <div className="row m-0 p-0">
            <div className="dropdown">
              <button
                className="w-100 rounded-1 p-1 dropdown-toggle m-0"
                type="button"
                id="assignmentDropDown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                }}
              >
                <FaMagnifyingGlass className="me-3" />
                Search Assignments
              </button>
              <div
                className="dropdown-menu float-end"
                aria-labelledby="dropdownAssignment"
              >
                <a className="dropdown-item" onClick={() => {}}>
                  ...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-2">
          <button
            className="w-100 rounded-1 p-1 m-1 text-center"
            type="button"
            style={{ border: "1px solid lightgray" }}
          >
            <FaFilter className="me-3" />
            Apply Filters
          </button>
        </div>
        <div className="col-10"></div>
      </div>

      <div className="row p-2 mt-1 mb-1 me-5">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{ width: "32%", verticalAlign: "middle" }}
                >
                  Student Name
                </th>
                {assignments.map((assignment) => (
                  <th scope="col" style={{ width: "17%", textAlign: "center" }}>
                    {assignment.title}
                    <br />
                    Out of 100
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => {
                const user = db.users.find(
                  (user) => user._id === enrollment.user
                );
                return (
                  <tr>
                    <td className="red-table-name">
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return (
                        <td style={{ textAlign: "center" }}>
                          {grade?.grade || ""}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    /*
    <div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>*/
  );
}
export default Grades;
