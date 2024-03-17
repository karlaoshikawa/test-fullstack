"use client";
import React from "react";
import Image from "next/image";
import uolLogo from "../../images/UOL_logo.png";
import { useRouter } from "next/navigation";
import style from "./header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className={style.header_container}>
      <Image onClick={() => router.push("/")} src={uolLogo} alt="logo da uol" />
    </div>
  );
};

export default Header;
