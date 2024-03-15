import { React, useState, useEffect } from "react";
import Items from "../../components/Items";
import Invoice from "../../components/Invoice";
import ItemService from "../../services/items";
// import useHandleClick from '../../hooks/useInvoiceItemsHandler'
import "./style.css";
// import { type } from "@testing-library/user-event/dist/type";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState("");
  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value;
    setInputText(lowerCase);
  };

  useEffect(() => {
    ItemService.getAll().then((item) => {
      setItems(item);
      setListItems(item);
      // Extract categories from items
      let cat = new Set(item.map((item) => item.category));
      cat = ['All', ...cat];
      setCategories(Array.from(cat));
    });
  }, []);  

  const handleClick = (id, quantity) => {
    if (quantity === '') return
    const item_to_add = items.find((i) => i.id === id);
    const find_item = invoiceItems.find((i) => i.id === item_to_add.id);
    
    if ( find_item && quantity === 0 ) {
      setInvoiceItems(invoiceItems.filter(item => item.id !== find_item.id));
    }
    else if (find_item) {
      let updated_item = invoiceItems.map((item) => {
        if (item.id === find_item.id) {          
          return { ...item, quantity: quantity };
        } else return item;
      });
      setInvoiceItems(updated_item);
    } else if (quantity !== 0) {      
      setInvoiceItems([...invoiceItems, { ...item_to_add, quantity: quantity }]);
    }
  };

  const filterItems = (klass, object) => {
    if (object !== 'All') {
     setListItems(items.filter(i => i[`${klass}`] === object))
    }
    else {
      setListItems(items)
    }
    setActiveTab(object)
  }

  const activeNav = (category) => {
    if (category === activeTab) {
      return "nav-item nav-link active";
    } else {
      return "nav-item nav-link";
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="my-5">Dashboard</h2>
       
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-8 col-12">
            <div class="input-group mb-3">
              <input type="text" className="form-control mb-4" placeholder="Search" onChange={inputHandler}/>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button">Search</button>
                </div>
            </div>
             
            <ul className="nav nav-tabs justify-content-between">        
              {categories.map((category) => {
                return (
                  <li className="cursor-pointer nav-item" onClick={() => filterItems('category', category)}><span className={activeNav(category)}>{category}</span></li>          
                )
              })}              
            </ul>
            <Items items={listItems} inputText={inputText} handleClick={handleClick} />
          </div>
          <Invoice invoiceItems={invoiceItems} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
