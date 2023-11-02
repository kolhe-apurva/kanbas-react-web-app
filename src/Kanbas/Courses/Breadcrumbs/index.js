import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Breadcrumbs = (props) => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div className="breadcrumbs" style={{ color: "red" }}>
      <h3 style={{ color: "red" }}>
        {pathSegments.length > 2 && (
          <Link
            style={{ textDecoration: "none", color: "red", fontSize: 35 }}
            to={`/Kanbas/Courses/${props.courseId}`}
          >
            {decodeURIComponent(props.courseId)}
          </Link>
        )}
        {pathSegments.slice(3).map((segment, index) => {
          const isLast = index === pathSegments.length - 4;
          return (
            <span key={segment}>
              {pathSegments.length > 2 && (
                <AiOutlineRight
                  className="ms-2 me-2"
                  size="20"
                  style={{ color: "gray" }}
                />
              )}
              {isLast ? (
                <span style={{ fontSize: "30px", color: "black" }}>
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "red" }}
                  to={`/${pathSegments.slice(0, index + 3).join("/")}`}
                >
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </span>
          );
        })}
      </h3>
    </div>
  );
};

export default Breadcrumbs;
