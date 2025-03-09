import Image from "next/image";
import { leftArrow } from "../svg";
import he from "he";
const LatestCard = ({ title, date, view, description }) => {
  const removeHtmlTags = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, "");
  };

  return (
    <div
      style={{
        boxShadow:
          "0px 9.088px 12.117px -3.029px var(--Colors-Effects-Shadows-shadow-lg_01, rgba(10, 13, 18, 0.08)), 0px 3.029px 4.544px -1.515px var(--Colors-Effects-Shadows-shadow-lg_02, rgba(10, 13, 18, 0.03)), 0px 1.515px 1.515px -0.757px var(--Colors-Effects-Shadows-shadow-lg_03, rgba(10, 13, 18, 0.04))",
      }}
      className=" border-[1px] border-[#E9EAEB] rounded-2xl"
    >
      <h2 className="text-[18px] p-4 truncate">{title}</h2>
      <img className="w-full" alt="" src="/images/news/test.png"></img>
      <div className="flex gap-3 p-4">
        <p>تاریخ: {date} </p>
        <p>بازدید : {view}</p>
      </div>
      <p className="p-4 mb-14  truncate">
        {removeHtmlTags(he.decode(description))}
      </p>
      <div className="p-4 flex justify-end">
        <button className="font-semibold text-[14px]  text-[#713FC2] flex gap-1  cursor-pointer">
          بیشتر بخوانید {leftArrow}
        </button>
      </div>
    </div>
  );
};
export default LatestCard;
