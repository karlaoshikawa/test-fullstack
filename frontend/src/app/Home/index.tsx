import React from "react";
import Header from "../../components/Header";
import InfosPage from "@/components/InfosPage";
import CustomerList from "@/components/CustomerList";
import style from "../../style/pages.module.scss"

const Home: React.FC = () => {
 return (
    <div className={style.container}>
      <Header />
      <InfosPage />
      <CustomerList />
    </div>
  );
};

export default Home;
