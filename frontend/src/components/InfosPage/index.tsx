import React from "react";
import { FiUser } from "react-icons/fi";
import style from "./infosPage.module.scss";

const InfosPage: React.FC = () => {
  return (
    <div className={style.infosPage_container}>
        <FiUser className={style.infosPage_icon} />
      
      <h2>Painel de clientes</h2>
    </div>
  );
};

export default InfosPage;
