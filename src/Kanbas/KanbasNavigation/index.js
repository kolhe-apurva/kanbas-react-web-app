import { Link, useLocation } from "react-router-dom";
import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { LuBookMinus } from "react-icons/lu";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import "./index.css";
function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <MdOutlineAccountCircle style={{ color: "white" }} />,
    Dashboard: <AiOutlineDashboard />,
    Courses: <LuBookMinus />,
    Calendar: <BsCalendarEvent />,
    Inbox: <HiOutlineMailOpen />,
    History: <AiOutlineClockCircle />,
    Studio: <PiProjectorScreenChartDuotone />,
    Commons: <IoExitOutline />,
    Help: <AiOutlineQuestionCircle />,
  };
  const { pathname } = useLocation();
  return (
    <div className="list-group nav-sidebar" size="150px">
      <img
        className="northeastern-university-logo"
        src="./Kanbas/northeastern-university-logo.png"
        alt="Northeastern University Logo"
      />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${link} ${
            pathname.includes(link) && "active"
          }`}
        >
          <div className="icon">{linkToIconMap[link]}</div>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
