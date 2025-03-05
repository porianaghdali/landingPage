
import Image from "next/image";
import Example from "../components/Example"
import ScrollableSection from "./ScrollableSection";
export default function Home() {
  return (
    <>
      <div
        className=" h-[87vh] mx-[6%] grid justify-center p-[16] gap-20"
        style={{
          backgroundImage: "url('/images/homePage.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
       <div className="flex flex-col items-center">
        <p className=" font-medium text-white text-[64px] leading-[90px] ">
          مرجع هوشمند بازارهای مالی
        </p>
        <p className="font-normal leading-16 text-3xl text-white ">
          آموزش‌‌های کاربردی، ابزارهای حرفه‌ای، تجربه رشد
        </p>
        <button className="mt-8 text-white px-6 py-4 text-2xl bg-[#8658D7] rounded-lg">
        درخواست دمو        </button>
        {/* <Image alt="" width={890} height={416} src="/images/group.png"></Image> */}
       </div>
       <Example/>
       </div>  
      <div className="flex flex-col items-center my-14">
        <p className="font-bold text-3xl leading-[50px] text-[#191919]">
          از مبتدی تا حرفه‌ای؛ همراه شما در معامله‌گری
        </p>
        <p className="text-[18px] font-medium  leading-[28px] text-center max-w-[1378px]">
          حسنیکال، جایی برای یادگیری، رشد و حرفه‌ای شدن در بازارهای مالی است. ما
          بر این باوریم که یک معامله‌گر موفق به ترکیبی از دانش، ابزارهای هوشمند
          و حس هفتم معامله‌گری نیاز دارد. با ارائه آموزش‌های گام‌به‌گام،
          تحلیل‌های جامع و جامعه‌ای از معامله‌گران، در هر قدم شما را در این مسیر
          همراهی می‌کنیم. ما معامله‌گران مبتدی را به حرفه‌ای‌هایی تبدیل می‌کنیم
          که با اعتماد به نفس و آرامش، بهترین تصمیمات را در بازارهای مالی
          می‌گیرند.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-14 max-w-4/5 mx-auto mb-20 ">
        <div className="col-span-1 grid justify-center  bg-gradient-to-b from-[#FFFFFF] to-[#E1D3FF] p-10  gap-24 rounded-2xl border-[1px] border-[#E1E1E1]">
          <Image alt="" width={170} height={180} src="/images/home/beginnerToProfessional/1.png"></Image>
          <div>
            <p className="font-semibold text-[20px]">تجربه رشد مستمر</p>
            <p className="font-medium text-[16px]">
              همراهی در مسیر رشد تا کسب موفقیت{" "}
            </p>
          </div>
        </div>
        <div className="col-span-2 grid gap-9">
          <div className="flex items-center bg-gradient-to-b from-[#FFFFFF] to-[#E1D3FF] p-10  gap-24 rounded-2xl border-[1px] border-[#E1E1E1]">
            <div>
              <p className="font-semibold text-[20px]">جامعه معامله‌گران</p>
              <p className="font-medium text-[16px]">
                اشتراک‌گذاری تجربیات در فضایی پویا
              </p>
            </div>
            <Image alt="" width={170} height={160} src="/images/home/beginnerToProfessional/2.png"></Image>
          </div>
          <div className="flex items-center bg-gradient-to-b from-[#FFFFFF] to-[#E1D3FF] p-10  gap-24 rounded-2xl border-[1px] border-[#E1E1E1]">
            <Image alt="" width={189} height={140} src="/images/home/beginnerToProfessional/3.png"></Image>
            <div>
              <p className="font-semibold text-[20px]">جامعه معامله‌گران</p>
              <p className="font-medium text-[16px]">
                اشتراک‌گذاری تجربیات در فضایی پویا
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid justify-center  bg-gradient-to-b to-[#FFFFFF] from-[#E1D3FF] p-10  gap-24 rounded-2xl border-[1px] border-[#E1E1E1]">
          <Image alt="" width={215} height={170} src="/images/home/beginnerToProfessional/4.png"></Image>{" "}
          <div>
            <p className="font-semibold text-[20px]">تجربه رشد مستمر</p>
            <p className="font-medium text-[16px]">
              همراهی در مسیر رشد تا کسب موفقیت{" "}
            </p>
          </div>
        </div>
      </div>
      <ScrollableSection />
      <div
        className="flex  justify-center mt-20"
        style={{
          backgroundImage: "url('/images/home/hesnicalInstagram/socialBg.png')",
          // background: url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat, url(<path-to-image>) lightgray 50% / cover no-repeat;
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          mixBlendMode: "luminosity",
          lightingColor: "lightgray 50%",
        }}
      >
        <div className="w-1/3 flex flex-col gap-4 justify-center">
          <p className="text-3xl font-bold leading-5">
             حسنیکال را در اینستاگرام دنبال کنید
          </p>
          <p className="text-2xl font-semibold leading-5">
            تحلیل‌های حرفه‌ای، ترفندهای کاربردی
          </p>
          <p className="text-[20px] font-normal leading-8-">
            با دنبال کردن صفحه اینستاگرام ما، به جدیدترین تحلیل‌ها، آموزش‌های
            کاربردی و اخبار بازارهای مالی دسترسی پیدا کنید و آگاهانه‌تر تصمیم
            بگیرید.
          </p>
        </div>

        <div className=" w-1/3 flex justify-center  ">
          <div className=" relative w-fit">
            <Image
              alt=""
              width={400}
              height={813}
              src="/images/home/hesnicalInstagram/hesnicalinsta.png"
            ></Image>{" "}
            <div className=" absolute right-[-90px] top-[132px]">
              <Image
                alt=""
                width={261}
                height={384}
                src="/images/home/hesnicalInstagram/right.png"
              ></Image>
            </div>
            <div className=" absolute left-[-80px] top-[250px] ">
              <Image
                alt=""
                width={261}
                height={384}
                src="/images/home/hesnicalInstagram/left.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-[700px] items-center">
        <div className="cols-span-1 grid justify-center">
          <div
            className=" max-w-[680px] grid gap-8 justify-center items-center
          bg-[#FBFBFB] p-6 border-[1px] border-[#DAD3E4] rounded-3xl"
          ><div className="w-full grid justify-center"> <Image
              alt=""
              width={53}
              height={55}
              src="/images/hesniLogo.png"
            ></Image>{" "}</div>
           
            <p className="text-[18px] font-medium leading-5">
              لطفا ایمیل خود را وارد نماید تا مشاوران ما ظرف 24 ساعت با شما
              ارتباط بگیرند{" "}
            </p>
            <div className="grid gap-1">
              <label className="text-xs text-[#6A6768] font-semibold" htmlFor="email">ایمیل*</label>
              <input className="bg-white p-4 border-[1px] border-[#C8C7C7] rounded-xl outline-none" type="text" placeholder="ایمیل خود را وارد کنید" />
            </div>
          </div>
        </div>
        <div className="cols-span-1 max-w-[680px] grid justify-center">
          <p className=" text-3xl leading-5 font-bold text-[#191919=">قدم در بازارهای مالی، آسان‌تر از همیشه</p>
          <p className=" text-[20px] leading-8 text-[#313131]">همین حالا اولین گام در مسیر معامله‌گری حرفه‌ای خود را مطمئن‌تر بردارید. ما شما را با ابزارها، تحلیل‌ها و آموزش‌های کاربردی  و پیشرفته در مسیر رشد و موفقیت همراهی می‌کنیم.</p>  </div>
      </div>
      
    
    </>
  );
}
