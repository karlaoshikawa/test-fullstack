"use client";
import React from "react";
import Image from "next/image";
import uolLogo from "../../images/UOL_logo.png";
import { useRouter } from "next/navigation";
import style from "./header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  // const router = useRouter();
  return (
    <div className={style.header_container}>
      <Link href="/">
        <Image
          // onClick={() => router.push("/")}
          src={uolLogo}
          alt="logo da uol"
        />
      </Link>
    </div>
  );
};

export default Header;
