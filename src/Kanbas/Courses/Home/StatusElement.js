import { React } from "react";
import { LuBan } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import { FaFileImport } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsCalendarPlus } from "react-icons/bs";
import { PiNumberCircleSixBold } from "react-icons/pi";
const StatusElement = () => {
  return (
    <div>
      <div className="row">
        <h5>Course Status</h5>
      </div>
      <div className="row" style={{ height: "35px" }}>
        <div className="col-6 col-xs-6 btn-light">
          <div className="row h-100">
            <button type="button" className="btn btn-light btn-sm">
              <LuBan className="me-2" />
              Unpublish
            </button>
          </div>
        </div>
        <div className="col-6 col-xs-6 btn-success">
          <div className="row h-100">
            <button type="button" className="btn btn-success btn-sm">
              <BsCheckCircle className="me-2" />
              Published
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <FaFileImport />
          &nbsp;Import Existing Content
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <LiaFileImportSolid />
          &nbsp;Import from Commons
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <FaRegCircleDot />
          &nbsp;Choose Home Page
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <BsFillBarChartLineFill />
          &nbsp;View Course Stream
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <FaBullhorn />
          &nbsp;New Announcement
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <BsFillBarChartLineFill />
          &nbsp;New Analytics
        </button>
      </div>
      <div className="row mt-1" style={{ height: "35px" }}>
        <button
          type="button"
          className="text-start btn btn-light btn-sm"
          style={{ width: "100%", paddingLeft: "1em" }}
        >
          <FiBell />
          &nbsp;View Course Notifications
        </button>
      </div>
      <div className="row mt-1 border-bottom-2" style={{ height: "35px" }}>
        <h5>To Do</h5>
      </div>
      <div className="row m-0 p-0">
        <hr />
      </div>
      <div className="row">
        <div className="col-2">
          <PiNumberCircleSixBold style={{ color: "#ff0000" }} />
        </div>
        <div className="col-10 p-0">
          <p className="p-0 m-0" style={{ color: "red", fontWeight: "400" }}>
            Grade A1 - ENV + HTML
          </p>
          <p className="p-0 m-0" style={{ fontSize: "x-small" }}>
            100 points * Sep 18 at 11:59pm
          </p>
        </div>
      </div>
      <div className="row mt-3 p-1">
        <div className="col-6">
          <h6 className="float-left" style={{ fontSize: "small" }}>
            Coming Up
          </h6>
        </div>
        <div className="col-6">
          <span
            className="float-right"
            style={{ color: "#ff0000", fontSize: "x-small" }}
          >
            <BsCalendarPlus />
            View Calendar
          </span>
        </div>
      </div>
      <div className="row m-0 b-0">
        <hr />
      </div>
      <div className="row">
        <div className="row">
          <div className="col-2">
            <BsCalendarPlus />
          </div>
          <div className="col-10">
            <span style={{ color: "red", fontSize: "small" }}>Lecture</span>
            <p style={{ color: "darkgray", fontSize: "x-small" }}>
              CS4550.12631.202410
              <br />
              Sep 11 at 11:59pm
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <BsCalendarPlus />
          </div>
          <div className="col-10">
            <span style={{ color: "red", fontSize: "small" }}>Lecture</span>
            <p style={{ color: "darkgray", fontSize: "x-small" }}>
              CS4550.12631.202410
              <br />
              Sep 11 at 11:59pm
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <BsCalendarPlus />
          </div>
          <div className="col-10">
            <span style={{ color: "red", fontSize: "small" }}>Lecture</span>
            <p style={{ color: "darkgray", fontSize: "x-small" }}>
              CS4550.12631.202410
              <br />
              Sep 11 at 11:59pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatusElement;
