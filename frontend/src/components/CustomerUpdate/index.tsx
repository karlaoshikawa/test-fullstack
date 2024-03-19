"use client";

import { requestOne, requestUpdate } from "@/api";
import ReusableForm from "@/components/ReusableForm";
import { Customer, CreateCustomer } from "@/interface/customer.interface";
import { useEffect, useState, useCallback, useMemo } from "react";
import style from "./customerUpdate.module.scss"

export default function CustomerUpdate({ id }: { id: string }) {
  const [userData, setUserData] = useState<Customer>();

  async function onSubmit(customer: CreateCustomer) {
    await requestUpdate(`/customer/${id}`, { id: Number(id), ...customer });
  }

  const fetchUserData = useCallback(async () => {
    const res = await requestOne(`/customer/${id}`);
    setUserData(res)
  }, [id])

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div className={style.customerUpdate_container}>
      <h2>Atualizar as informações do usuário</h2>
      <h3>Informe os campos a seguir para alterar usuário:</h3>
      <ReusableForm
        handleSubmit={onSubmit}
        data={userData}
        buttonType="Update"
      />
    </div>
  );
}
