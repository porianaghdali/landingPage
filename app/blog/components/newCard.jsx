import Image from "next/image";
import { dateIcon,arrow,
    viewIcon } from "./svg";
const NewCard = ({ title, date, view, description }) => {
  return (
    <div
     
      className=" rounded-2xl  grid  "
    > 
      <Image src="/images/blog/blogTest.png" width={814} height={305} className="w-full mb-2 rounded-t-2xl"/>
      <div
      
        className=" rounded-b-2xl  text-white py-2 px-7 grid items-end "
      >
        <p className="text-lg font-semibold text-[#181D27] mb-2 leading-8 text-start">{title}</p>
        <p className=" text-[16px]  leading-7  text-[#414651]    text-start line-clamp-6 overflow-hidden text-ellipsis">{description}</p>
        <div className="flex justify-between">
          <div className="p-4 flex justify-end items-center">
            <button className="font-semibold text-[14px]  text-[#F6F5FD] flex gap-1  cursor-pointer">
              بیشتر بخوانید{" "}
              {arrow}
            </button>
          </div>
          <div className="flex gap-3 p-4 items-center">
            <p className="flex items-center gap-2">{dateIcon}{date}</p>
            <p className="flex items-center gap-2"> {viewIcon}{view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewCard;
