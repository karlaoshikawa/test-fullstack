"use client";
import React from "react";
import Header from "../../components/Header";
import InfosPage from "@/components/InfosPage";
import CustomerRegister from "@/components/CustomerRegister";
import style from "../../style/pages.module.scss";

const register: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <InfosPage />
      <CustomerRegister />
    </div>
  );
};

export default register;
