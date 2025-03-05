import Image from "next/image";
import { leftArrow } from "../svg";
const ImportantCard = ({ title, date, view, description }) => {
  return (
    <div
   
      className=" flex gap-4 "
    >
      <Image 
        className="rounded-md w-36 h-22"
        width={144}
        height={88}
        alt=""
        src="/images/news/test.png"
      />
      <div className="grid gap-1">
        <p className="text-[16px] font-semibold">{title}</p>
        <p className="text-[#535862] text-[14px]">{description}</p>
      
        
        <div className=" flex mt-1">
          <button className="font-semibold text-[14px]  text-[#713FC2] flex gap-1  cursor-pointer">
            بیشتر بخوانید {leftArrow}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImportantCard;
