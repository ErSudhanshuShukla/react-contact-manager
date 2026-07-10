import React from "react";
import {
  RiEditBoxLine,
  RiDeleteBin6Line,
  RiUserLine,
  RiPhoneLine,
  RiMailLine,
} from "@remixicon/react";

const UserCard = ({ user, deleteUser, setToggle, editUser }) => {
  return (
    <div className="flex p-4 justify-between text-white rounded-xl w-full  bg-black shadow-[0_0_40px_rgba(59,130,246,0.6)] border border-blue-500">
      <div className="flex flex-col gap-2">
        <h1 className="flex gap-2 items-center">
          <RiUserLine />
          {user.name}
        </h1>
        <p className="flex gap-2 items-center">
          <RiPhoneLine />
          +91 {user.number}
        </p>
        <p className="flex gap-2 items-center">
          <RiMailLine />
          {user.email}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <button
          onClick={() => {
            setToggle((prev) => !prev);
            editUser(user);
          }}
          className="bg-blue-600 p-1 rounded cursor-pointer"
        >
          <RiEditBoxLine />
        </button>
        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-600 p-1 rounded cursor-pointer"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
