import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button";

const ModalWrapper = (props) => {
  const { isOpenModal, handleShowModal } = props;

  return (
    <>
      <Modal
        show={isOpenModal}
        onHide={handleShowModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Make sure customer paid his bill.
        </Modal.Body>
        <Modal.Footer>
          <Button className={'btn btn-primary dropdown'} onClick={handleShowModal}>Close</Button>
          <Button className={'btn btn-primary dropdown'} onClick={handleShowModal}>Yes,Paid</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWrapper;
