import React, { useState, useEffect  } from "react";
import CustomerCard from "../OrderCustomerCard/Customercard";
import OrderCustomerVehicleInfo from "../OrderCustomerVehicle/OrderCustomerVehicleInfo";



function OrderCustomerInfo({  }) {
    
   
  return (
    <>
      <CustomerCard />     
      <OrderCustomerVehicleInfo/>
      </>
    
  );
}

export default OrderCustomerInfo;
