import { leftArrow } from "../../svg";
import Carousel from "../../components/swiper";
import ImportantCard from "../../components/importantCard";
import Link from "next/link";
const Important = () => {
  const lastNews = [

    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1401",
      view: "3",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1399",
      view: "4",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1378",
      view: "5",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1378",
      view: "5",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
    {
      title: "طرح بندی خودکار توضیح داده شد",
      date: "1378",
      view: "5",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
  ];
  return (
    <>
   
      <div className=" grid gap-4">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">مهم ترین ها</p>
          <Link href={`/news/mostImportant`} className="font-semibold text-[14px] text-[#713FC2] flex gap-1  cursor-pointer">
            مشاهده همه
            {leftArrow}
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-6 ">
          <div className="col-span-2 bg-green-200 rounded-2xl">
            <Carousel />
          </div>
          <div className="col-span-3 grid grid-cols-1 gap-6">
            {lastNews.slice(0,4).map((item, key) => {
              return (
                <div key={key} className="">
                  <ImportantCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    view={item.view}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="   h-[1px]  border-[#E9EAEB] my-16" />
    </>
  );
};
export default Important;
