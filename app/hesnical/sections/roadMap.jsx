



const RoadMap=()=>{
    const dot=(<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10.104C20 15.6269 15.5228 20.104 10 20.104C4.47715 20.104 0 15.6269 0 10.104C0 4.58116 4.47715 0.104004 10 0.104004C15.5228 0.104004 20 4.58116 20 10.104ZM2.11035 10.104C2.11035 14.4613 5.64266 17.9937 10 17.9937C14.3573 17.9937 17.8897 14.4613 17.8897 10.104C17.8897 5.74667 14.3573 2.21435 10 2.21435C5.64266 2.21435 2.11035 5.74667 2.11035 10.104Z" fill="#81759E"/>
        <circle cx="10" cy="10.104" r="7" fill="#503285"/>
      </svg>)
    return(
        <>
          <div className="grid grid-cols-2 px-[15vw] py-[5vw] bg-[#EDEBF3]">
        <div className="grid gap-2">
          <p className="font-bold text-3xl">مسیری که حسنیکال طی کرده</p>
          <p className="text-[18px] font-medium">
            حسنیکال با یک ایده‌ی ساده اما قدرتمند آغاز شد: پر کردن شکاف میان
            واقعیت‌های بازارهای مالی و انعکاس‌های تبلیغاتی اغراق‌آمیز. ما در
            پاسخ به نیاز معامله‌گرانی که به دنبال صداقت، دانش کاربردی و
            تحلیل‌های حرفه‌ای بودند، قدم برداشتیم. از تولید محتوای آموزشی گرفته
            تا توسعه‌ی ابزارهای پیشرفته‌ی تحلیلی؛ مسیر ما همواره بر پایه‌ی
            نوآوری، شفافیت و کاربرد پیش رفته است.<br></br> خدمات حسنیکال با
            طراحی مجموعه‌‌ای از دوره‌های آموزشی و کاربردی شروع شد، اما امروز،
            حسنیکال چیزی فراتر از یک پلتفرم آموزشی است؛ مسیری که در جهت ایجاد یک
            اکوسیستم پویا و جامع در بازارهای مالی در حسنیکال طی کردیم موجب شد تا
            معامله‌گران را با دانش، ابزار و ارتباطات مؤثر گرد هم آورد و مسیر
            دستیابی به سود و موفقیت را در بازارهای مالی را هموارتر کند.
          </p>
        </div>
        <div className="flex justify-center">
            <div className="relative">
          <svg
            width="4"
            height="664"
            viewBox="0 0 4 664"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="663.822"
              y2="-0.5"
              transform="matrix(0.00340699 0.999994 -0.999998 7.95173e-05 0.179688 0.00195312)"
              stroke="#A4A4A4"
              strokeDasharray="8 8"
            />
          </svg>
          <div  className="flex gap-2 items-center absolute top-1/5 translate-x-[2.8rem]"><p className="text-[#503285] text-[16px] font-semibold">1399</p>{dot} </div>
          <div className="flex gap-2 items-center absolute top-2/5 translate-x-2">{dot}<p className="text-[#503285] text-[16px] font-semibold">1400</p></div>
          <div  className="flex gap-2 items-center absolute top-3/5 translate-x-[2.8rem]"><p className="text-[#503285] text-[16px] font-semibold">1401</p>{dot}</div>
          <div className="flex gap-2 items-center absolute top-4/5 translate-x-2">{dot}<p className="text-[#503285] text-[16px] font-semibold">1402</p></div>
          </div>
        </div>
      </div>
        </>
    )
}
export default RoadMap