import React from "react";
import "./PopUp.css";

const PopUp = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">New Folder</div>
        <div className="modal-body">
          <input type="text" onChange={props.onChange} />
        </div>
        <div className="modal-footer">
          <button className="btn-create" onClick={props.onSend}>
            Create
          </button>
          <button className="btn-close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
