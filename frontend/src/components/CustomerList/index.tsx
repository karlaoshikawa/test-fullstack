"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Customer } from "../../interface/customer.interface";
import { requestData } from "../../api";
import CustomerEdit from "../CustomerEdit";
import { SlClose } from "react-icons/sl";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [customerToUpdateId, setCustomerToUpdateId] = useState<number | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    requestData("/customer")
      .then((res) => {
        console.log(res);
        setCustomerList(res);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  }, []);

  const handleEditClick = (customerId: number) => {
    router.push(`/update/${customerId}`);
  };

  const handleCustomerUpdate = (updatedCustomer: Customer) => {
    const updatedCustomerList = customerList.map((customer) =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    setCustomerList(updatedCustomerList);
    setCustomerToUpdateId(null); 
  };

  const handleCustomerRegister = () => {
    router.push("/register");
  }

  return (
    <div>
      <h2>Listagem de usuários</h2>
      <p>Escolha um cliente para vizualizar os detalhes</p>
      <h3 onClick={handleCustomerRegister}>Novo cliente</h3>

      {customerList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {customerList.map((customer) => (
            <div key={customer.id}>
              <p>{customer.name}</p>
              <p>{customer.email}</p>
              <p>{customer.cpf}</p>
              <p>{customer.phone}</p>
              <p>{customer.status}</p>
              <h3 onClick={() => handleEditClick(customer.id)}>Editar</h3>
              {/* {customerToUpdateId === customer.id && (
                <div>
                  <CustomerEdit
                    customer={customer}
                    handleUpdate={handleCustomerUpdate}
                  />
                  <div onClick={() => setCustomerToUpdateId(null)}>
                    <SlClose />
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;
