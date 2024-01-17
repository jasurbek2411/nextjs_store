"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { push } = useRouter();

  const handlerOut = () => {
    signOut();
    push("/auth/sign-in");
  };

  return (
    <div className="sticky flex items-center  min-h-[70px] top-0 left-0 max-w-screen">
      <div className="container mx-auto">
        <Button onClick={() => handlerOut()}>Sign out</Button>
        fdsa
      </div>
    </div>
  );
};

export default Navbar;
