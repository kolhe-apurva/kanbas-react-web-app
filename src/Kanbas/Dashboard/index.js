import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { LuFileEdit } from "react-icons/lu";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />

      <div className="row ms-1 me-2">
        {courses.map((course) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3"
            key={course._id}
          >
            <div className="card">
              <div className="d-flex flex-row align-items-center">
                <img
                  className="card-img-top img-fluid"
                  style={{ objectFit: "contain" }}
                  src="./Kanbas/Dashboard/purple_card.png"
                  alt="Course 1"
                />
              </div>
              <div className="card-body">
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="no-underline"
                >
                  <h5
                    className="card-title text-nowrap text-truncate"
                    style={{ color: "purple" }}
                  >
                    {course._id + " " + course.number + " " + course.name}
                    <br />
                    <span className="gray-text">
                      {course._id + "." + course.number}
                    </span>
                  </h5>

                  <p className="gray-text card-text text-nowrap text-truncate">
                    202410_1 Fall 2023 Semester Full Term
                  </p>
                </Link>
              </div>
              <div className="icon icon-gray pb-4 ps-4">
                <LuFileEdit />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
