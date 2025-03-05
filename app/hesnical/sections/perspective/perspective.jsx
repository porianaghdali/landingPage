import Image from "next/image";

const Perspective = () => {
  const content = [
    {
      imgUrl: "/images/aboutHesnical/hesnical/right.png",
      title: "چشم انداز ",
      Description:
        "در دنیایی که شفافیت و اعتماد در بازارهای مالی به مهم‌ترین دغدغه هر معامله‌گری تبدیل شده است، حسنیکال همواره تلاش می‌کند تا مرجعی قابل اعتماد در ارائه خدمات آموزشی باکیفیت و ابزارهای حرفه‌ای در فارکس و ارز دیجیتال باشد. ما در حسنیکال آینده‌ای را تصور می‌کنیم که در آن هر معامله‌گر، با اتکا به دانش به‌روز، ابزارهای هوشمند و حس تکامل‌ یافته خود در بازارهای مالی، می‌تواند با اطمینان و امنیت خاطر معامله کند.",
    },
    {
      imgUrl: "/images/aboutHesnical/hesnical/left.png",
      title: "ماموریت",
      Description:
        "در دنیایی که شفافیت و اعتماد در بازارهای مالی به مهم‌ترین دغدغه هر معامله‌گری تبدیل شده است، حسنیکال همواره تلاش می‌کند تا مرجعی قابل اعتماد در ارائه خدمات آموزشی باکیفیت و ابزارهای حرفه‌ای در فارکس و ارز دیجیتال باشد. ما در حسنیکال آینده‌ای را تصور می‌کنیم که در آن هر معامله‌گر، با اتکا به دانش به‌روز، ابزارهای هوشمند و حس تکامل‌ یافته خود در بازارهای مالی، می‌تواند با اطمینان و امنیت خاطر معامله کند.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-30 px-[15vw] py-[5vw]">
        {content.map((item, key) => {
          return (
            <div key={key}>
              <div className="flex items-center gap-2 pb-2 border-b-[1px] border-[#C9CBD1] ">
                <Image alt="" width={48} height={48} src={item.imgUrl}></Image>
                <p className="text-3xl font-bold ">{item.title}</p>
              </div>
              <p className="mt-4">{item.Description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Perspective;
