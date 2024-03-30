import Button from "../Button";
import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import ItemService from "../../services/items";

export default function CreateItemModal(props) {
  const { isOpenModal, setIsOpenModal, handleShowModal, items, setItems } = props;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: null,
    quantity: "",
    volume: null,
    volume_type: "",
  });

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleClickSubmit = () => {    
    ItemService.postItem(formData).then((item) => {
      console.log(item.data, "new item created");
      setItems((prevItems) => [item.data, ...prevItems]);
      setIsOpenModal(false);
    });
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
        <Modal.Title>New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="name"
              placeholder="Enter Name"
              onChange={handleFormData}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              min="0"
              placeholder="Price"
              onChange={handleFormData}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              placeholder="category"
              onChange={handleFormData}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              name="quantity"
              type="number"
              min="0"
              placeholder="quantity"
              onChange={handleFormData}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              name="volume"
              type="number"
              min="0"
              placeholder="volume"
              onChange={handleFormData}
            />
          </Form.Group>

          <Form.Select
            name="volume_type"
            aria-label="Default select example"
            onChange={handleFormData}
          >
            <option>Volume type</option>
            <option value="kg">kg</option>
            <option value="ltr">ltr</option>
            <option value="ml">ml</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={"btn btn-primary dropdown"}
          onClick={handleShowModal}
        >
          Cancel
        </Button>
        <Button
          className={"btn btn-primary dropdown"}
          onClick={handleClickSubmit}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
