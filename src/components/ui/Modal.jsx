import React from "react";
import ReactDOM from "react-dom";
import Style from "./Modal.module.css";
const Modal = (props) => {
  const location = document.querySelector("#modal");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, location)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        location
      )}
    </>
  );
};

const Backdrop = (props) => {
  return <div className={Style.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{props.children}</div>
    </div>
  );
};

export default Modal;
