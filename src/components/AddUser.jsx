import React from "react";
import { useForm } from "react-hook-form";
import {
  RiEditBoxLine,
  RiAddLine,
  RiUserLine,
  RiPhoneLine,
  RiMailLine,
} from "@remixicon/react";

const AddUser = ({ setUsers, setToggle, editUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: editUser,
  });

  const onSubmit = (data) => {
    if (editUser) {
      setUsers((prev) => {
        const updatedUsers = prev.map((val) =>
          val.id === editUser.id ? { ...data, id: editUser.id } : val,
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
    } else {
      setUsers((prev) => {
        const updatedUsers = [...prev, { ...data, id: Date.now().toString() }];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        return updatedUsers;
      });
    }
    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="text-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className=" rounded-xl bg-black text-white flex flex-col p-5 gap-8 justify-center m-auto shadow-[0_0_40px_rgba(59,130,246,0.6)] max-w-150 border border-blue-500"
      >
        <div className="flex justify-center">
          {editUser ? (
            <h1 className="flex gap-2 items-center text-2xl">
              <RiEditBoxLine className="w-8 h-8" /> Edit Contact
            </h1>
          ) : (
            <h1 className="flex gap-1 items-center text-2xl">
              <RiAddLine className="w-8 h-8" /> Add Contact
            </h1>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 w-full">
            <RiUserLine />
            <input
              {...register("name", {
                required: "Name is required",
              })}
              className="p-2 border-2 border-gray-500 rounded-xl w-full"
              type="text"
              placeholder="Name"
            />
          </div>
          {errors.name && (
            <p className="text-red-600"> {errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 w-full">
            <RiPhoneLine />
            <input
              type="tel"
              maxLength={10}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              {...register("number", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              className="p-2 border-2 border-gray-500 rounded-xl w-full"
              placeholder="Mobile Number"
            />
          </div>
          {errors.number && (
            <p className="text-red-600">{errors.number.message}</p>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 w-full">
            <RiMailLine />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border-2 border-gray-500 rounded-xl w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-600 rounded-xl cursor-pointer"
        >
          {editUser ? <h1>Update</h1> : <h1>Submit</h1>}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
