import { dateIcon,arrow,
    viewIcon } from "./svg";
const NewCard = ({ title, date, view, description }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/news/test2.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
      className=" rounded-2xl h-60 grid items-end"
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(0deg, rgba(13, 11, 11, 0.30) 0%, rgba(13, 11, 11, 0.30) 100%)",
        }}
        className=" rounded-b-2xl h-1/2 text-white py-2 px-7 grid items-end "
      >
        <p className="text-[16px] font-semibold">{title}</p>
        <p className=" text-[14px]  text-[#E0DBF9]  truncate ">{description}</p>
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
