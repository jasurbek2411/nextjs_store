import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SingupPage = () => {
  return (
    <div className="shadow-sm tablet:w-[40%] mobile:w-[80%] bg-white/80 mt-[5%] p-4 rounded-md">
      <h2 className="text-center text-[32px] font-[600]">Singup</h2>
      <form className="flex flex-col items-center gap-y-4 my-4">
        <Input
          type="text"
          placeholder="Username"
          className="w-[100%] text-[16px] "
        />
        <Input
          type="text"
          placeholder="First name"
          className="w-[100%] text-[16px] "
        />
        <Input
          type="text"
          placeholder="Last name"
          className="w-[100%] text-[16px] "
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-[100%] text-[16px]"
        />
        <Input
          type="password"
          placeholder="Again password"
          className="w-[100%] text-[16px]"
        />
        <Button className="w-[100%] text-[16px]">Sigup</Button>
      </form>
      <div className="flex items-center justify-end mt-4">
        <Link
          href={"/sign-in"}
          className="text-blue-700 underline uppercase font-[600]"
        >
          Singin
        </Link>
      </div>
    </div>
  );
};

export default SingupPage;
