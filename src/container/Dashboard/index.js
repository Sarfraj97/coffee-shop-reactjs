import { React, useState, useEffect } from "react";
import Items from "../../components/Items";
import Invoice from "../../components/Invoice";
import ItemService from "../../services/items";
import "./style.css";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ItemService.getAll().then((item) => setItems(item));
  }, []);

  useEffect(() => {
    const cat = new Set(items.map((item) => item.category));
    setCategories(Array.from(cat));
  }, [items]);

  const handleClick = (action, id) => {
    if (action === "add") {
      const item_to_add = items.find((i) => i.id === id);
      const find_item = invoiceItems.find((i) => i.id == item_to_add.id);
      if (find_item) {
        let updated_item = invoiceItems.map((item) => {
          if (item.id === find_item.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
        setInvoiceItems(updated_item);
      } else {
        setInvoiceItems([...invoiceItems, { ...item_to_add, quantity: 1 }]);
        console.log(invoiceItems, "Invoice after add first time");
      }
    } else {
      const item_to_add = items.find((i) => i.id === id);
      const find_item = invoiceItems.find((i) => i.id == item_to_add.id);
      if (find_item) {
        let updated_item = invoiceItems.map((item) => {
          if (item.id === find_item.id) {
            if (item.quantity > 1) { return { ...item, quantity: item.quantity - 1 } }
            else return false;
          } else return item;
        });
        setInvoiceItems(updated_item.filter(item => item !== false));
      }
    }
  };
  console.log(invoiceItems, "Invoices");
  return (
    <>
      <div className="container">
        <h2 className="mt-5">Dashboard</h2>
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-9 col-12 px-0">
            <Items items={items} handleClick={handleClick} />
          </div>
          <Invoice invoiceItems={invoiceItems} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
