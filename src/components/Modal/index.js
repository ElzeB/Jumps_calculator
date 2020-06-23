import React from "react";
import Button from "../Button";
import "./index.css";

const Modal = ({ handleClose, show, children }) => {

const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button onClick={handleClose} title="Close"></Button>
      </section>
    </div>
  );
};

export default Modal;