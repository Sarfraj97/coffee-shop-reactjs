import React, { useState } from "react";
import ModalWrapper from "../../components/Modal";
import Button from "../../components/Button";
import ListItem from "../../components/Invoice/ListItem";
import { useNavigate } from "react-router-dom";

export default function Invoice(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const { invoiceItems, handleClick } = props
  
  const handleShowModal = () => {    
    setIsOpenModal(!isOpenModal);
  };
  
  const total_price = invoiceItems.length
    ? (invoiceItems.reduce(
        (sum, current) => sum + current.price * current.quantity,
        0
      ))
    : 0;

  return (
    <>
      <div className="col-md-4 bg-gray rounded col-lg-4 col-sm-12 mt-5 text-end border-end border-start px-0">
        <div className="right_section px-4">
          {invoiceItems.map((item) => {
            return (
              <ListItem key={item.id} item={item} handleClick={handleClick}/>
            );
          })}
        </div>
        <div className="row border-top border-bottom px-2 mx-0 total">
          <div className="col-6 text-start">
            <strong>Total</strong>
          </div>
          <div className="col-6 text-end">
            <strong>Rs.{total_price}</strong>
          </div>
        </div>
        <div className="row py-4 border-bottom px-2 mx-0">
          <Button
            className={`btn btn-primary dropdown ${invoiceItems.length === 0 ? 'disabled' : ''}`}
            onClick={handleShowModal}
          >
            Confirm Order
          </Button>
        </div>
      </div>

      <ModalWrapper
        isOpenModal={isOpenModal}
        handleShowModal={handleShowModal}
        invoiceItems={invoiceItems}
        handleClick={handleClick}
      />
    </>
  );
}
