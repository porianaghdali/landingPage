import { leftArrow } from "../../svg";
import { dateIcon, viewIcon, like, dislLike } from "../../components/svg";
import Carousel from "../../components/swiper";
import NewCard from "../../components/newCard";
import Image from "next/image";
const New = () => {
  const lastNews = [
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
    {
      title: "عنوان و یا موضوع بلاگ",
      date: "1403/12/12",
      view: "10025",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.",
      img: "/images/blog/Avatar.png",
      author: " علی احمدی",
      like: 14,
      dislLike: 10,
    },
  ];
  if (lastNews.length <= 1) return null; // اگر فقط یک خبر هست، نیازی به نمایش نیست  
  const pattern = [3, 4, 3, 4];
  let index = 1;
  let structuredNews = []; // خبر اول به‌تنهایی در یک آرایه
  let patternIndex = 0; // برای حرکت درون الگو
  while (index < lastNews.length) {
    let num = pattern[patternIndex]; // تعداد آیتم‌های این بخش
    if (index >= lastNews.length) break;
    
    structuredNews.push(lastNews.slice(index, index + num));
    index += num;
  
    patternIndex = (patternIndex + 1) % pattern.length; // چرخش در الگو
  }
  console.log(
    "%capp\blogsections\new\new.jsx:39 structuredNews",
    "color: #007acc;",
    structuredNews
  );

  return (
    <>
      <div className="grid gap-4 mb-20">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">جدید ترین ها</p>
          <button className="font-semibold text-[14px] text-[#713FC2] flex gap-1  cursor-pointer">
            مشاهده همه
            {leftArrow}
          </button>
        </div>
        <div className="grid grid-cols-5 gap-12 ">
          <div className="col-span-2 bg-green-200 rounded-2xl ">
            <Image
              src="/images/blog/test.png"
              width={730}
              height={484}
              alt=""
              className="h-full w-full"
            />{" "}
          </div>
          <div className="col-span-3 py-3 border-b-[2px] border-t-[2px]  border-[#E9EAEB] ">
            <div className="flex justify-between mb-2">
              <p className="text-[#181D27] font-semibold text-2xl">
                {lastNews[0].title}{" "}
              </p>
              <div className="flex gap-7">
                <span className="flex gap-2 items-center text-[#181D27] text-[12px] font-medium">
                  {dateIcon}
                  {lastNews[0].date}
                </span>
                <span className="flex gap-2 items-center text-[#181D27] text-[12px] font-medium">
                  {viewIcon}
                  {lastNews[0].view}
                </span>
              </div>
            </div>
            <p className="font-medium text-[#414651] text-lg mb-7">
              {lastNews[0].description}
            </p>
            <div className="flex justify-between mb-2">
              <div
                style={{
                  background:
                    "var(--Component-colors-Utility-Gray-utility-gray-50, #FAFAFA)",
                }}
                className="text-[#181D27] font-semibold text-2xl flex gap-2 items-center border-[1px] border-[#E9EAEB] py-1.5 px-2 rounded-full"
              >
                <Image
                  src={lastNews[0].img}
                  width={20}
                  height={20}
                  alt=""
                  className=""
                />{" "}
                <p className="font-medium text-lg text-[#414651]">
                  {" "}
                  نویسنده : {lastNews[0].author}
                </p>
              </div>
              <div className="flex gap-7">
                <button className="flex gap-2 items-center text-[#717680] text-[14px] font-semibold">
                  {like}
                  {lastNews[0].like} نفر
                </button>
                <button className="flex gap-2 items-center text-[#717680] text-[14px] font-semibold">
                  {dislLike}
                  {lastNews[0].dislLike} نفر
                </button>
              </div>
            </div>

            {/* {structuredNews.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((item, colIndex) => (
            <div
              key={colIndex}
              className="p-4 bg-gray-200 rounded-lg w-full text-center"
            >
              {item}
            </div>
          ))}
        </div>
      ))} */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 p-4">
        {structuredNews.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-12">
            {row.map((item, colIndex) => (
              <div style={{
                boxShadow: "0px 4px 6px -1px var(--Colors-Effects-Shadows-shadow-md_01, rgba(10, 13, 18, 0.10)), 0px 2px 4px -2px var(--Colors-Effects-Shadows-shadow-md_02, rgba(10, 13, 18, 0.06))"
              }}
                key={colIndex}
                className="hover:translate-y-[-.5rem] transition-all duration-300 ease-in  rounded-2xl border-[1px] border-[#D5D7DA] w-full text-center"
              >
                <NewCard
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  view={item.view}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr className="h-[1px] border-[#E9EAEB] my-16" />
    </>
  );
};
export default New;
