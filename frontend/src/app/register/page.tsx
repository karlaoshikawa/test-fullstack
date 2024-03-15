"use client";
import React from "react";
import Header from "../../components/Header";
import InfosPage from "@/components/InfosPage";
import CustomerRegister from "@/components/CustomerRegister";

const register: React.FC = () => {
  return (
    <div>
      <Header />
      <InfosPage />
      <CustomerRegister />
    </div>
  );
};

export default register;
