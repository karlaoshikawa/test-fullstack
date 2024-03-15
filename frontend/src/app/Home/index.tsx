import React from "react";
import Header from "../../components/Header";
import InfosPage from "@/components/InfosPage";
import CustomerList from "@/components/CustomerList";

const Home: React.FC = () => {
 return (
    <div>
      <Header />
      <InfosPage />
      <CustomerList />
    </div>
  );
};

export default Home;
