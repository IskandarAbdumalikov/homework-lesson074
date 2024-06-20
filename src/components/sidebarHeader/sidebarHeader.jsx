import React from "react";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import "./sidebarHeader.scss";

const SidebarHeader = ({ setClose, close }) => {
  return (
    <div className="sidebarheader">
      <button onClick={() => setClose((p) => !p)}>
        {close ? <FaCircleRight /> : <FaCircleLeft />}
      </button>
      <div className="profile">
        <h4>John Doe</h4>
        <img
          className="profile__img"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
