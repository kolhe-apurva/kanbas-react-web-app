import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB Navigate)",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group second-sidebar-ul list-group-flush">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${encodeURIComponent(link)}`}
          className={`text-danger list-group-item second-navbar-item ${
            pathname.includes(encodeURIComponent(link)) && "active"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
