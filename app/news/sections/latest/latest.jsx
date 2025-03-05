import LatestCard from "../../components/latestCard";
import { loading } from "../../svg";

const Latest = () => {
  const lastNews = [
    {
      title: "عنوان خبر ",
      date: "1403",
      view: "145",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      title: "عنوان خبر ",
      date: "1403",
      view: "145",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      title: "عنوان خبر ",
      date: "1403",
      view: "145",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
    {
      title: "عنوان خبر ",
      date: "1403",
      view: "145",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    },
  ];
  return (
    <>
      <div className=" grid gap-4">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">آخرین اخبار</p>
        </div>

        <div className=" grid grid-cols-4 gap-8">
          {lastNews.map((item, key) => {
            return (
              <div key={key} className=" ">
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
        <div className=" flex justify-center">
          <button className="flex gap-2 mt-20 mb-10 cursor-pointer">
            {" "}
            <span className="animate-spin">{loading}</span>
            مشاهده بیشتر
          </button>
        </div>
      </div>
    </>
  );
};
export default Latest;
