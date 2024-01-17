"use client";

import TitleNavbar from "@/components/shared/navbar";
import AuthNavbar from "./auth/_components/navbar";
import { useSession } from "next-auth/react";
import React from "react";

const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  console.log(session.data);
  return (
    <div className="relative min-h-screen max-w-screen ">
      {session.data === null ? <AuthNavbar /> : <TitleNavbar />}
      <div>{children}</div>
    </div>
  );
};

export default LayoutPages;
