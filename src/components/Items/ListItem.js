import { React, useRef } from "react";
import "./style.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function ListItem(props) {
  const inputElement = useRef(0);

  const item = props.item;
  const handleClick = props.handleClick;
  return (
    <div className="row py-4 border-bottom align-items-center px-2">
      <div className="col-4">{item.name}</div>
      <div className="col-4 text-center">{item.price}</div>
      <div className="col-4">
        <div className="btn-toolbar">
          <div className="btn-group mx-auto" role="group">
            <button
              onClick={() => handleClick("remove", item.id, inputElement.current.value)}
              type="button"
              className="btn"
              data-type="minus"
              data-field="quant[2]"
            >
              <AiOutlineMinusCircle size={25}/>
            </button>

            <button
              onClick={() => handleClick("add", item.id, inputElement.current.value)}
              type="button"
              className="btn"
              data-type="plus"
              data-field="quant[2]"
            >
              <AiOutlinePlusCircle size={25}/>
            </button>
            <input type="number" min="0" ref={inputElement}/>  
          </div>
        </div>
      </div>
    </div>
  );
}
