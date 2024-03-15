"use client";
import React, { useEffect, useState } from "react";
import { Customer } from "../../interface/customer.interface";
import { requestData } from "../../api";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState<Customer[]>([]);

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;
