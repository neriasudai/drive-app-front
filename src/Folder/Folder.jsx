import React from "react";
import "./Folder.css";
import { MdFolder } from "react-icons/md";

const Folder = ({ name, onClick }) => {
  return (
    <div className="folder__box" onClick={onClick}>
      {name} <MdFolder />
    </div>
  );
};

export default Folder;
