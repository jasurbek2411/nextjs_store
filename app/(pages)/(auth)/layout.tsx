import React, { ReactNode } from "react";
import Navbar from "./_components/navbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen relative">
      <Navbar />
      <div className="w-full h-full  flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
