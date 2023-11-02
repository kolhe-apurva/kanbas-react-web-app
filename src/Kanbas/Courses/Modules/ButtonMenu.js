import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import "./index.css";

function ButtonMenu() {
  return (
    <div className="container">
      <div
        className="d-flex justify-content-end mb-3"
        style={{ height: "fit-content" }}
      >
        <button
          type="button"
          className="btn btn-light me-2"
          style={{ border: "1px solid lightgray", width: "fit-content" }}
        >
          Collapse All
        </button>
        <button
          type="button"
          className="btn btn-light me-2"
          style={{ border: "1px solid lightgray", width: "fit-content" }}
        >
          View Progress
        </button>
        <div className="dropdown me-2">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="exportDropDown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ border: "1px solid lightgray" }}
          >
            <AiOutlineCheckCircle
              className="me-2"
              style={{ color: "#3fe470" }}
            />
            Publish All
          </button>
          <div className="dropdown-menu" aria-labelledby="exportDropDown">
            <a className="dropdown-item" onClick={() => {}}>
              ...
            </a>
          </div>
        </div>
        <button
          className="btn btn-danger me-2"
          type="button"
          style={{ width: "fit-content" }}
        >
          <AiOutlinePlus className="me-2" />
          Module
        </button>
        <button
          type="button"
          className="btn btn-light me-2"
          style={{ border: "1px solid lightgray", width: "fit-content" }}
        >
          <CiMenuKebab className="me-2" />
        </button>
      </div>
    </div>
  );
}

export default ButtonMenu;
