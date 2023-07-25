import React from 'react'
import ListItem from "../../components/Items/ListItem";

export default function Items(props) {
  // console.log(props, "inside")
  const {items, inputText, handleClick} = props

  const filteredData = items.filter((el) => { 
    if (inputText === '') {
       return el;
    } 
    else { 
      return el.name.toLowerCase().includes(inputText.toLowerCase())      
    } 
  })

  return (
    <div>
      <div className="row py-4 border-bottom align-items-center px-0 mx-0">
        <div className="col-3 text-start"><strong>Name</strong></div>
        <div className="col-3 text-center"><strong>Quantity</strong></div>
        <div className="col-3 text-center"><strong>Price</strong></div>
      </div>
      
      <div className="left_section">
        {filteredData.map(item => {
          return (
            <ListItem key={item.id} item={item} handleClick={handleClick}/>
          )
        })}            
      </div>
    </div>
  )
}
