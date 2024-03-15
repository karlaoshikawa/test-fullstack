import React from "react";
import { Customer } from "@/interface/customer.interface";
import Header from "../../components/Header";
import InfosPage from "@/components/InfosPage";
import CustomerList from "@/components/CustomerList";

const Home: React.FC = () => {
  const customer: Customer = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    cpf: "123.456.789-10",
    phone: "123456789",
    status: "ativo",
  };

  return (
    <div>
      <Header />
      <InfosPage />
      <CustomerList />
    </div>
  );
};

export default Home;
