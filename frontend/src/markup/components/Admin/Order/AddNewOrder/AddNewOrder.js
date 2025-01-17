import React, { useState, useEffect, createContext } from "react";
import CustomerCard from "../OrderCustomerCard/Customercard";
import customerContext from "../../../../../../src/Contexts/CustomerContext";
import { CustomerProvider } from "../../../../../../src/Contexts/CustomerContext";
import OrderVehicleCard from "../OrderVehicleCard/OrderVehicleCard";
import { Link, useParams, useLocation } from "react-router-dom";
import OrderService from "../OrderService/Orderservice";
function AddNewOrder({}) {
  const { customer_id } = useParams();

  const location = useLocation();
  const { vehicle } = location.state || {};

  if (!vehicle) {
    return <div>No vehicle data available</div>;
  }
  return (
    <div>
      <CustomerCard />     
      <OrderVehicleCard vehicle={vehicle} />
      <OrderService />
    </div>
  );
}

export default AddNewOrder;

