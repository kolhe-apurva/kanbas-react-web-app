import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumbs from "./Breadcrumbs";
import { AiOutlineMenu } from "react-icons/ai";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { GrInspect } from "react-icons/gr";

function Courses(props) {
  const { courseId } = useParams();
  const course = props.courses?.find((course) => course._id === courseId);
  return (
    <div className="container-fluid" style={{ width: "90vw" }}>
      <div className="row pt-3 align-content-center align-items-center">
        <div className="col-1">
          <AiOutlineMenu style={{ color: "red" }} size="40" />
        </div>
        <div className="col-9">
          <Breadcrumbs courseId={course._id} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-light" size="100%">
            <GrInspect className="me-2" /> Student View
          </button>
        </div>
      </div>
      <div className="row">
        <hr />
      </div>
      <div className="row">
        <div className="col-md-2 ps-3 d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="col-12 col-md-10 container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route
              path="Assignments/:newassignment"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
