import React from "react";
import Image from "next/image";
import Logo from "@/components/Logo";

interface layout {
  children: React.ReactNode;
}

const layout = ({ children }: layout) => {
  return (
    <div className="h-screen flex justify-center items-center bgone">
      <div className="hidden lg:block w-1/2 h-full">
       <Image alt='login'
       src='/login.jpg'
       height={1920}
       width={1080} 
       className=" h-full w-full object-cover object-top"/>
      </div>
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center items-center">
        <div className="flex items-center pb-5">
          <Logo/>
        </div>
        {children}

      </div>
    </div>
  );
};

export default layout;
