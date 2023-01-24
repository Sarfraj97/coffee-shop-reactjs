import React from 'react'
import ListItem from "../../components/Items/ListItem";

export default function Items(props) {
  // console.log(props.items, "inside")
  const items = props.items
  const inputText = props.inputText

  const filteredData = items.filter((el) => { 
    if (inputText === '') {
       return el;
    } 
    else { 
      return el.name.includes(inputText)
    } 
  })

  return (
    <div>
      <div className="row py-4 border-bottom align-items-center px-0 mx-0">
        <div className="col-4 text-start"><strong>Name</strong></div>
        <div className="col-4 text-center"><strong>Price</strong></div>
      </div>
      
      <div className="left_section">
        {filteredData.map(item => {
          return (
            <ListItem key={item.id} item={item} handleClick={props.handleClick}/>
          )
        })}            
      </div>
    </div>
  )
}
