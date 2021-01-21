import React from "react";

const Modal = ({ showModal, hideModal, children }) => {
  return (
    showModal && (
      <div className="modalBackground" onClick={hideModal}>
        <div className="modalContainer">{children}</div>
      </div>
    )
  );
};

export default Modal;
