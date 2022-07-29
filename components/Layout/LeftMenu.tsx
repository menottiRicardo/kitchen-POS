import React from "react";
import { BiCog, BiMoney } from "react-icons/bi";
import { GiTable } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";
import Link from "next/link";
const LeftMenu = ({ children }: any) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="bg-primary-700 px-3 my-auto py-4 rounded-tr-xl rounded-br-xl pr-4">
        <Link passHref href={"/tables"}>
          <div className="bg-primary-600 text-white rounded-md p-2 h-10 my-5 flex items-center justify-center">
            <GiTable size={20} />
          </div>
        </Link>

        <Link passHref href={"/menu-settings"}>
          <div className="bg-primary-600 text-white rounded-md p-2 h-10 my-5 flex items-center justify-center">
            <MdOutlineMenuBook size={20} />
          </div>
        </Link>

        <Link passHref href={"/pay"}>
          <div className="bg-primary-600 text-white rounded-md p-2 h-10 my-5 flex items-center justify-center">
            <BiMoney size={20} />
          </div>
        </Link>
        <div className="bg-primary-600 text-white rounded-md p-2 h-10 my-5 flex items-center justify-center">
          <BiCog size={20} />
        </div>
      </div>
      
      {children}
      
    </div>
  );
};

export default LeftMenu;
