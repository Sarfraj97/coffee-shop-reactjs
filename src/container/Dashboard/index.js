import { React, useState, useEffect } from "react";
import Items from "../../components/Items";
import Invoice from "../../components/Invoice";
import ItemService from "../../services/items";
import "./style.css";
// import { type } from "@testing-library/user-event/dist/type";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");
  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value;
    setInputText(lowerCase);
  };

  useEffect(() => {
    ItemService.getAll().then((item) => setItems(item));
  }, []);

  useEffect(() => {
    const cat = new Set(items.map((item) => item.category));
    setCategories(Array.from(cat));
  }, [items]);

  const handleClick = (action, id, quantity) => {
    console.log(quantity)
    if (quantity === '' || quantity === '0') return
    if (action === "add") {
      const item_to_add = items.find((i) => i.id === id);
      const find_item = invoiceItems.find((i) => i.id == item_to_add.id);
      if (find_item) {
        let updated_item = invoiceItems.map((item) => {
          if (item.id === find_item.id) {
            // console.log(typeof(quantity), typeof(item.quantity));
            return { ...item, quantity: Number(item.quantity) + Number(quantity) };
          } else return item;
        });
        setInvoiceItems(updated_item);
      } else {
        setInvoiceItems([...invoiceItems, { ...item_to_add, quantity: Number(quantity) }]);
        // console.log(invoiceItems, "Invoice after add first time");
      }
    } else {
      const item_to_add = items.find((i) => i.id === id);
      const find_item = invoiceItems.find((i) => i.id == item_to_add.id);
      if (find_item) {
        let updated_item = invoiceItems.map((item) => {
          if (item.id === find_item.id) {
            if (((item.quantity - quantity) !== 0) && action !== 'remove_all' ) { return { ...item, quantity: Number(item.quantity) - Number(quantity) } }            
            else return false;
          } else return item;
        });
        setInvoiceItems(updated_item.filter(item => item !== false));
      }
    }
  };
  // console.log(invoiceItems, "Invoices");
  return (
    <>
      <div className="container">
        <h2 className="mt-5">Dashboard</h2>
        <input type="text" className="" placeholder="search" onChange={inputHandler}/>
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-9 col-12 px-0">
            <Items items={items} inputText={inputText} handleClick={handleClick} />
          </div>
          <Invoice invoiceItems={invoiceItems} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
