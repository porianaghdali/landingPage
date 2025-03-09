import Image from "next/image";
import { phone, email, telegram } from "../../svg";
export const Communication = () => {
  return (
    <div className="grid mb-10">
      <div className="grid grid-cols-5 p-16 border-[1px] rounded-2xl gap-x-30 gap-y-8 border-[#D5D7DA]">
        <div className="col-span-3">
          <p className="text-2xl font-semibold mb-3">راه های ارتباطی</p>
          <p className="text-[16px] mb-6">
            در حسنیکال، ارتباط شفاف و موثر با شما اساس کار ماست؛ از این رو،
            همواره از طریق راه‌های مختلف ارتباطی، همراه شما هستیم تا به سوالات
            یا نیازهای شما پاسخ دهیم.
          </p>
          <div className="grid gap-6">
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                {phone}
              </span>
              <p className="text-lg  text-[#414651] font-medium">
                021-22285427
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                {email}
              </span>
              <p className="text-lg  text-[#414651] font-medium">
                hesnical@gmail.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                {telegram}
              </span>
              <p className="text-lg  text-[#414651] font-medium">ID TELEGRAM</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid gap-6">
          <Image
            src="/images/contactUs/map.png"
            width={608}
            height={318}
            alt=""
          />
          <p className="text-lg text-[#414651]">
            نشانی حسنیکال: مرزداران -پلاک 463
          </p>{" "}
        </div>
        <hr className="w-full col-span-5 border-[#E9EAEB]" />
        <div className="col-span-3 ">
          <p className="text-2xl font-semibold mb-3">ارتباط با ما</p>
          <p className="text-lg font-semibold text-[#414651] mb-3">
            با ما در ارتباط باشید؛ حسنیکال اینجاست تا شما را در مسیر رشد و
            موفقیت همراهی کند.
          </p>
          <p className="text-[16px]">
            ما در حسنیکال باور داریم که شفافیت و ارتباط مستمر، منجر به ارائه
            خدمات بهتر به مشتریان می‌شود. از این رو، معتقدیم که دسترسی آسان به
            تیم پشتیبانی و مشاوران ما، کلید ایجاد اعتماد و همراهی واقعی است. به
            همین دلیل، تمامی راه‌های ارتباطی حسنیکال به طور مداوم بررسی می‌شود
            تا در سریع‌ترین زمان ممکن به پیام‌های شما پاسخ داده شود. تیم مشاوران
            ما همواره آماده‌اند تا با ارائه راهنمایی و مشاوره حرفه‌ای، همراه شما
            در بازارهای مالی باشند.
          </p>
        </div>
        <div className="col-span-2 grid gap-6 ">
          <div className="flex gap-4">
            <div>
              <div className="grid gap-1">
                <label htmlFor="name">
                  <span className="text-[#8658D7]">*</span> نام و نام خانوادگی
                </label>
                <input
                  style={{
                    boxShadow:
                      "0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
                  }}
                  placeholder="نام و نام خانوادگی خود را وارد نمایید"
                  className="px-3 w-full py-2 rounded-lg border-[1px] border-[#D5D7DA] outline-none"
                  type="text"
                  id="name"
                />
              </div>
            </div>
            <div>
              <div className="grid gap-1">
                <label htmlFor="name">
                  <span className="text-[#8658D7]">*</span> ایمیل{" "}
                </label>
                <input
                  placeholder="olivia@untitledui.com"
                  className="px-3 py-2 rounded-lg border-[1px] w-full border-[#D5D7DA] outline-none"
                  type="text"
                  id="name"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="description">
              <span className="text-[#8658D7]">*</span> متن پیام
            </label>
            <textarea
              className="px-3 w-full py-2 rounded-lg border-[1px] h-[208px] border-[#D5D7DA] outline-none mb-8"
              style={{ resize: "none" }}
              placeholder="توضیحات را وارد کنید..."
              name=""
              id="description"
            ></textarea>
            <button
              style={{
                borderColor: "rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
              }}
              className="p-3 bg-[#8658D7] text-white text-[16px] font-semibold w-full text-center  rounded-lg border-[2px] "
            >
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Communication;
