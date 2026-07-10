import React from "react";
import {
  RiReactjsFill,
  RiRemixiconLine,
  RiTailwindCssLine,
  RiDatabase2Line,
  RiFileList3Line,
} from "@remixicon/react";

const Footer = () => {
  return (
    <div className=" text-center inset-x-8 fixed bottom-5 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.6)] bg-black text-gray-300 p-4 border border-blue-500">
      <div className="flex justify-between items-center "></div>
      <p>© 2026 Sudhanshu Shukla</p>
      <p></p>
      <p className="text-sm mt-2 flex justify-center items-center gap-2 flex-wrap">
        Built with
        <RiReactjsFill />
        React •
        <RiTailwindCssLine />
        Tailwind CSS •
        <RiDatabase2Line /> Local Storage •
        <RiFileList3Line />
        React Hook Form •
        <RiRemixiconLine />
        Remix Icon
      </p>
    </div>
  );
};

export default Footer;
