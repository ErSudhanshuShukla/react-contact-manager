import React from "react";
import { RiUserLine, RiUserAddLine } from "@remixicon/react";

const Navbar = ({ setToggle, editUser }) => {
  return (
    <div className="flex justify-between items-center bg-black text-gray-300 p-4 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.6)] border border-blue-500 ">
      <div className="flex gap-2">
        <RiUserLine className="h-10 w-10" />
        <h1 className="text-2xl xl:text-3xl">Contacts</h1>
      </div>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
          editUser(null);
        }}
        className="p-2 rounded-xl bg-blue-200 text-black cursor-pointer shadow-[0_0_25px_rgba(34,197,94,0.4)]"
      >
        <RiUserAddLine className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Navbar;
