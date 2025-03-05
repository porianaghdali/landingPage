import {  leftArrow} from "../../svg";
import Carousel from "../../components/swiper";
import NewCard from "../../components/newCard";

const New = () => {
  const lastNews = [
    {
      title: "عنوان خبر",
      date: "1403",
      view: "1",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
        img:"/images/news/test.png"
    },
    {
      title: "عنوان خبر",
      date: "1402",
      view: "2",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test2.png"
    },
    {
      title: "عنوان خبر",
      date: "1401",
      view: "3",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test.png"
    },
    {
      title: "عنوان خبر",
      date: "1399",
      view: "4",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test2.png"
    },

  
  ];
  return (
    <>
      <div className="grid gap-4"
      >
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">جدید ترین ها</p>
          <button className="font-semibold text-[14px] text-[#713FC2] flex gap-1  cursor-pointer">
            مشاهده همه
            {leftArrow}
          </button>
        </div>
        <div className="grid grid-cols-5 gap-6 ">
          <div className="col-span-2 bg-green-200 rounded-2xl ">
            <Carousel />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-6">
            {lastNews.map((item, key) => {
              return (
                <div key={key} className=" ">
                <NewCard
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
      <hr className="h-[1px] border-[#E9EAEB] my-16" />
    </>
  );
};
export default New;
