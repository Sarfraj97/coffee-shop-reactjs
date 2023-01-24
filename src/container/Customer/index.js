import React from 'react'
import Items from "../../components/Items";
import Invoice from "../../components/Invoice";

function Customer() {
  return (
    <>
      <div className="container">
        <h2 className="mt-5">Customer</h2>
        <input type="text" className="" placeholder="search"/>
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-9 col-12 px-0">
            {/* <Items/> */}
          </div>
          {/* <Invoice /> */}
        </div>
      </div>
    </>
  );
}

export default Customer