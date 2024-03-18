import React from "react";
import { CreateCustomer } from "../../interface/customer.interface";
import { requestRegister } from "../../api";
import ReusableForm from "../ReusableForm";
import style from "./customerRegister.module.scss"

const CustomerRegister: React.FC = () => {
  const handleSubmit = async (customer: CreateCustomer) => {
    try {
      await requestRegister("/customer", customer);
      console.log("Customer registered successfully");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <div className={style.customerRegister_container}>
      <h2>Novo usuário</h2>
      <h3>Informe os campos a seguir para criar novo usuário:</h3>
      <ReusableForm handleSubmit={handleSubmit} buttonType="Criar"/>
    </div>
  );
};

export default CustomerRegister;
