import Button from "../Button";
import React from 'react'
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import OrderService from "../../services/order"

const ConfirmModal = (props) => {
  const { isOpenModal, handleShowModal, selectedCustomer, newOrder, setIsOpenModal} = props;
  // const navigate = useNavigate()
  // const {    
  //   setNewOrder
  // } = React.useContext(ItemContext);

  const handleClickYes = () => {
    // navigate(`/customer/${selectedCustomer}`)
    // console.log(newOrder, "sasasasasa")
    OrderService.CreateOrder(newOrder, selectedCustomer.id).then(res => {
      console.log("order created successfully");
    })

    setIsOpenModal(!isOpenModal);
  };

  return (
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
        <Modal.Body>This action will update your records</Modal.Body>
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
  )
}

export default ConfirmModal;
