import { React, useRef, useState } from "react";
import "./style.css";

export default function ListItem(props) {
  const inputElement = useRef(0);
  const [count, setCount] = useState('0');
  const item = props.item;
  const handleClick = props.handleClick;
  const handleCount = (value) => {
    // console.log(event)
    setCount(value);
  }
  return (
    <div className="row py-4 border-bottom align-items-center px-2">
      <div className="col-4">{item.name}</div>
      <div className="col-4 text-center">{item.price}</div>
      <div className="col-4">
        <div className="btn-toolbar">
          <div className="btn-group mx-auto" role="group">            
            <input type="number" min="0" ref={inputElement} value={count !== "0" ? count : ""} onChange={() => {
              handleCount(inputElement.current.value);
              handleClick(item.id, inputElement.current.value);
              }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
