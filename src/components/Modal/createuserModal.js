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
          <Modal.Title>Create customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className='p-4'>          
              <NewCustomer setIsOpenModal={setIsOpenModal} setCustomerAdded={setCustomerAdded}/>
            </div>
          </div>
        </Modal.Body>        
      </Modal>
  )
}
