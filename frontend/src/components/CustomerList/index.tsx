"use client";
import React, { useEffect, useState } from "react";
import { Customer } from "../../interface/customer.interface";
import { requestData } from "../../api";
import CustomerEdit from "../CustomerEdit";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [customerToUpdateId, setCustomerToUpdateId] = useState<number | null>(
    null
  );

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
    setCustomerToUpdateId(customerId);
  };

  return (
    <div>
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
              {customerToUpdateId === customer.id && (
                <div>
                  <CustomerEdit customer={customer} />
                  <h4 onClick={()=> setCustomerToUpdateId(null)}>fechar</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;
