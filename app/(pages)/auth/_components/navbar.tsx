import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 left-0 min-h-[70px] bg-neutral-900/90 flex items-center border-b shadow-md">
      <div className="container mx-auto text-white flex items-center">
        <Link href={"/"} className="flex items-center space-x-1">
          <Image src={"/icon.svg"} alt="LOGO" width={32} height={32} />
          <span className="uppercase text-[24px] font-[600]">store</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
