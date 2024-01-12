"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingInPage = () => {
  return (
    <div className="shadow-sm tablet:w-[40%] mobile:w-[80%] bg-white/80 mt-[5%] p-4 rounded-md">
      <h2 className="text-center text-[32px] font-[600]">Signin</h2>
      <div className="w-[100%] mx-auto mt-4">
        <Button
          type="button"
          variant={"ghost"}
          className="w-full uppercase flex items-center space-x-2 transition duration-300"
        >
          <Image src={"/google-icon.svg"} alt="GOOGLE" width={24} height={24} />
          <span className="text-[14px] font-[500]">Sign up with google</span>
        </Button>
      </div>
      <form className="flex flex-col items-center gap-y-4 my-4">
        <Input
          type="text"
          placeholder="Username"
          className="w-[100%] text-[16px] "
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-[100%] text-[16px]"
        />
        <Button className="w-[100%] text-[16px]">Sigin</Button>
      </form>
      <div className="flex items-center justify-end mt-4">
        <Link
          href={"/sign-up"}
          className="text-blue-700 underline uppercase font-[600]"
        >
          Singup
        </Link>
      </div>
    </div>
  );
};

export default SingInPage;
