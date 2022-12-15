import React, { useState } from "react";
import ModalWrapper from "../../components/Modal";
import Button from "../../components/Button";
import ListItem from "../../components/Invoice/ListItem";

export default function Invoice(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleShowModal = () => setIsOpenModal(!isOpenModal);
  const invoiceItems = props.invoiceItems
  // console.log(invoiceItems.length)
  const total_price = invoiceItems.length ? invoiceItems.reduce((sum, current) => sum + current.price * current.quantity, 0) : 0
  
  return (
    <>
      <div className="col-md-3 col-lg-3 col-12 col-sm-3 pt-5 mt-5 text-end border-end border-start px-0">
        <div className="right_section px-2">
        {invoiceItems.map(item => {
          return (
            <ListItem key={item.id} item={item}/>
          )
        })}
        </div>
        <div className="row border-top border-bottom px-2 mx-0 total">
          <div className="col-6 text-start">
            <strong>Total</strong>
          </div>
          <div className="col-6 text-end">
            <strong>${total_price}</strong>
          </div>
        </div>
        <div className="row py-4 border-bottom px-2 mx-0">
          <Button className={'btn btn-primary dropdown'} onClick={handleShowModal}>Confirm Order</Button>
        </div>
      </div>

      <ModalWrapper isOpenModal={isOpenModal} handleShowModal={handleShowModal}/>
    </>
  );
}
