import { React, useState } from "react";
import { useParams } from "react-router";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  console.log(modules);
  console.log(module);
  const dispatch = useDispatch();

  return (
    <ul className="container modules-main-css list-group">
      <li className="list-group-item">
        <div className="row p-2">
          <h5>Modify Modules</h5>
          <hr />
        </div>
        <div className="row d-flex flex-row container mt-0 ms-0 me-0 mb-2">
          <div className="col-10">
            <div className="row">
              <div className="col-2 input-box">
                <label>Name</label>
              </div>
              <div className="col-10 input-box">
                <input
                  value={module.name}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
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
                  value={module.description}
                  onChange={(e) =>
                    dispatch(
                      setModule({ ...module, description: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-2 d-flex flex-column align-items-center ">
            <div className="row" style={{ width: "100%", height: "50%" }}>
              <button
                className="module-modify-button"
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
              >
                Add
              </button>
            </div>
            <div className="row" style={{ width: "100%", height: "50%" }}>
              <button
                className="module-modify-button"
                onClick={() => dispatch(updateModule(module))}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </li>
      <h4 className="mt-3 mb-0">Modules</h4>
      <hr className="mt-2" />
      {modules
        .filter((module) => module.course === courseId)
        .map((module, moduleIndex) => (
          <ul className="p-0 m-0" key={module._id}>
            <li className="list-group-item list-group-item-secondary gray-heading d-flex justify-content-between align-items-center mt-2">
              <h5 className="mb-0">{module.name}</h5>
              <div>
                <button
                  className="module-modify-in-card-button"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="module-modify-in-card-button"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
              </div>
            </li>
            <li className="list-group-item white-background">
              <p className="mb-0">{module.description}</p>
            </li>
          </ul>
        ))}
    </ul>
  );
}
export default ModuleList;
