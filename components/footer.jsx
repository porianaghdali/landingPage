import Link from "next/link";
import { Hesnical, insta, linkdin } from "../svg/dummy";
const Footer = () => {
  const headerList = [
    { title: "خانه", href: "/home" },
    { title: "خدمات", href: "/Services" },
    { title: "حسنیکال", href: "/hesnical" },
    { title: "ارتباط با ما", href: "/ContactUs" },
    { title: "اخبار و تحلیل", href: "/news" },
    { title: "بلاگ", href: "/blog" },
  ];
  return (
    <div className="flex flex-col gap-6 bg-[#281B41] py-4  px-[6vw] h-[320px] ">
      <div className="flex items-end h-fit gap-8 w-full  border-b-[1px] border-[#F2F0F0] py-10">
        {Hesnical}
        <ul className="flex gap-8">
          {headerList.map((item, key, array) => {
            return (
              <li
                key={key}
                className="text-white text-[16px] flex gap-[28px] items-center h-fit"
              >
                <Link href={item.href}>{item.title}</Link>
                {array.length != key + 1 ? (
                  <hr className="w-[1px] h-4 bg-[#7B808C]" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-[#7B808C]">
          تمامی حقوق برای کاربر این محصول محقوظ است.{" "}
        </p>
        <div className="flex gap-1">
          {insta}
          {linkdin}
        </div>
      </div>
    </div>
  );
};
export default Footer;
