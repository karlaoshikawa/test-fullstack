"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Customer } from "../../interface/customer.interface";
import { requestData } from "../../api";
import { FaCircle } from "react-icons/fa";
import style from "./customerList.module.scss";

const CustomerList = () => {
  const [customerList, setCustomerList] = useState<Customer[]>([]);

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

  const handleCustomerRegister = () => {
    router.push("/register");
  };

  const getStatusInfo = (status: string | undefined): { status: string; color: string } => {
    switch (status) {
      case "ativo":
        return { status: "Ativo", color: "#4aad5a" };
      case "inativo":
        return { status: "Inativo", color: "#d7333f" };
      case "aguardando_ativacao":
        return { status: "Aguardando ativação", color: "#e19934" };
      default:
        return { status: "Desativado", color: "#d2d2d2" };
    }
  };

  return (
    <div className={style.customerList_container}>
      <div className={style.customerList_top_container}>
        <div>
          <h2>Listagem de usuários</h2>
          <h3>Escolha um cliente para vizualizar os detalhes</h3>
        </div>
        <p
          onClick={handleCustomerRegister}
          className={style.customerList_newclient_button}
        >
          Novo cliente
        </p>
      </div>
      {customerList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {customerList.map((customer) => (
            <div key={customer.id} className={style.customerList_customer_box}>
              <div className={style.customerList_customer_item}>
                <p className={style.customerList_customer_name_cpf}>
                  {customer.name}
                </p>
                <p className={style.customerList_customer_email}>
                  {customer.email}
                </p>
              </div>
              <div className={style.customerList_customer_item}>
                <p className={style.customerList_customer_name_cpf}>
                  {customer.cpf}
                </p>
                <p>{customer.phone}</p>
              </div>
              <div className={style.customerList_status}>
                <FaCircle color={getStatusInfo(customer.status).color} />
                <p>{getStatusInfo(customer.status).status}</p>
              </div>
              <p
                className={style.customerList_customer_edit_buttom}
                onClick={() => handleEditClick(customer.id)}
              >
                Editar
              </p>
            </div>
          ))}
        </div>
      )}
      <p className={style.customerList_total_customers}>
        Exibindo {customerList.length} clientes
      </p>
    </div>
  );
};

export default CustomerList;
