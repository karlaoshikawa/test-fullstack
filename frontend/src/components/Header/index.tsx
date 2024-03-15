import React from "react";
import Image from "next/image";
import uolLogo from "../../images/UOL_logo.png";

const Header: React.FC = () => {
  return (
    <div>
      <Image src={uolLogo} alt="logo da uol" />
    </div>
  );
};

export default Header;
