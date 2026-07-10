import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

const App = () => {
  /* local storage + user [array] */
  const [users, setUsers] = useState(() => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    return usersData ? usersData : [];
  });

  /*hide/unhide user form */
  const [toggle, setToggle] = useState(true);

  /* local storage + delete user */
  const deleteUser = (id) => {
    setUsers((prev) => {
      const updatedUsers = prev.filter((user) => user.id !== id);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  /* update user */
  const [edit, setEdit] = useState(null);

  return (
    <div className="p-5 flex flex-col  h-screen gap-10">
      <Navbar setToggle={setToggle} editUser={setEdit} />
      {!toggle ? (
        <AddUser setUsers={setUsers} setToggle={setToggle} editUser={edit} />
      ) : (
        <div className="flex flex-wrap gap-4 overflow-auto pb-50">
          {users.map((elem, idx) => (
            <UserCard
              key={idx}
              user={elem}
              deleteUser={deleteUser}
              setToggle={setToggle}
              editUser={setEdit}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
