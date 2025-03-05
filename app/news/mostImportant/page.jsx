
import LatestCard from "../components/latestCard";
import Filter from "../sections/filter/filter";

const MostImportant = () => {
  const lastNews = [
    {
      title: "عنوان خبر ",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
   
    {
      title: "عنوان خبر ",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
   
    {
      title: "عنوان خبر ",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
   
    {
      title: "عنوان خبر ",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
   
    {
      title: "عنوان خبر ",
      date: "1402",
      view: "2",
      description:
        "Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.Auto Layout یک سیستم چیدمان مبتنی بر محدودیت برای ایجاد یک رابط کاربری تطبیقی ​​است.",
    },
   
  ];
  return (
    <div className="px-[6%]">
        <Filter/>
        <div className="flex gap-1 p-4 border-b-[1px] border-[#E9EAEB] mb-8">
            <button className="py-2 px-3 rounded-md bg-[#F6F5FD] text-[#713FC2] text-[16px] font-semibold  cursor-pointer">جدید ترین ها</button>
            <button className="py-2 px-3 rounded-md bg-[#F6F5FD] text-[#713FC2] text-[16px] font-semibold  cursor-pointer">تاثیر گذارترین ها</button>
        </div>
      <div className="col-span-3 grid grid-cols-4 gap-16">
        {lastNews.map((item, key) => {
          return (
            <div key={key} className="">
              <LatestCard
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
  );
};
export default MostImportant;
