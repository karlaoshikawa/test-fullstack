import React from "react";
import { CreateCustomer, Customer } from "../../interface/customer.interface";
import { requestRegister } from "../../api";
import ReusableForm from "../ReusableForm";

const CustomerRegister: React.FC = () => {
  const handleSubmit = async (customer: CreateCustomer) => {
    try {
      await requestRegister("/customer", customer);
      console.log("Customer registered successfully");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return <ReusableForm handleSubmit={handleSubmit} />;
};

export default CustomerRegister;
