import { React, useState} from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import NewCustomer from "../../container/Customer/NewCustomer";


export default function CreateUserModal(props) {

  const { isOpenModal, handleShowModal, setIsOpenModal, setCustomerAdded } = props;  

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
        <Modal.Body>
          <div className="col-md-4 bg-gray rounded">
            <div className='p-4'>
              <p className="font-weight-bold fs-3">Create customer</p>
          
              <NewCustomer setIsOpenModal={setIsOpenModal} setCustomerAdded={setCustomerAdded}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={"btn btn-primary dropdown"}
            onClick={handleShowModal}
          >
            Close
          </Button>
          <Button
            className={"btn btn-primary dropdown"}            
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
