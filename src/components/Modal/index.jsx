import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Button";
import { useNavigate } from "react-router";

const ModalWrapper = (props) => {
  const { isOpenModal, handleShowModal } = props;
  const navigate = useNavigate()

  const handleClickYes = () => {
    navigate('/customer')
  };

  return (
    <>
      <Modal
        show={isOpenModal}
        onHide={handleShowModal}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to proceed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ready for next step</Modal.Body>
        <Modal.Footer>
          <Button
            className={"btn btn-primary dropdown"}
            onClick={handleShowModal}
          >
            Close
          </Button>
          <Button
            className={"btn btn-primary dropdown"}
            onClick={handleClickYes}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWrapper;
