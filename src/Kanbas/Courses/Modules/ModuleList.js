import { React } from "react";
import { useParams } from "react-router";
import db from "../../Database";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="container modules-main-css list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, moduleIndex) => (
          <ul
            key={moduleIndex}
            className="list-group-item list-group-item-secondary mt-2"
          >
            <h5 className="mb-0">{module.name}</h5>
          </ul>
        ))}
    </div>
  );
}
export default ModuleList;
