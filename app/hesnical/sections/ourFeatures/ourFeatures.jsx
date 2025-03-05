import { Clarity, Training, Accompanying, Innovation } from "./svg";
const OurFeatures = () => {
  const content=[
    {svg:Clarity,title:"شفافیت، اصل اول ماست",Description:"در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم."},
    {svg:Training,title:"شفافیت، اصل اول ماست",Description:"در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم."},
    {svg:Accompanying,title:"شفافیت، اصل اول ماست",Description:"در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم."},
    {svg:Innovation,title:"شفافیت، اصل اول ماست",Description:"در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم."},
  ]
  return (
    <>
      <div className="py-25 px-[12.5%] grid gap-13">
        <div className="flex items-center gap-5 justify-center">
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="#231F20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4787 20.867C27.0471 21.2853 26.8487 21.8903 26.9471 22.4837L28.4287 30.6837C28.5537 31.3787 28.2604 32.082 27.6787 32.4837C27.1087 32.9003 26.3504 32.9503 25.7287 32.617L18.3471 28.767C18.0904 28.6303 17.8054 28.557 17.5137 28.5487H17.0621C16.9054 28.572 16.7521 28.622 16.6121 28.6987L9.22873 32.567C8.86373 32.7503 8.45039 32.8153 8.04539 32.7503C7.05873 32.5637 6.40039 31.6237 6.56206 30.632L8.04539 22.432C8.14373 21.8337 7.94539 21.2253 7.51373 20.8003L1.49539 14.967C0.992059 14.4787 0.817059 13.7453 1.04706 13.0837C1.27039 12.4237 1.84039 11.942 2.52873 11.8337L10.8121 10.632C11.4421 10.567 11.9954 10.1837 12.2787 9.61699L15.9287 2.13366C16.0154 1.96699 16.1271 1.81366 16.2621 1.68366L16.4121 1.56699C16.4904 1.48033 16.5804 1.40866 16.6804 1.35033L16.8621 1.28366L17.1454 1.16699H17.8471C18.4737 1.23199 19.0254 1.60699 19.3137 2.16699L23.0121 9.61699C23.2787 10.162 23.7971 10.5403 24.3954 10.632L32.6787 11.8337C33.3787 11.9337 33.9637 12.417 34.1954 13.0837C34.4137 13.752 34.2254 14.4853 33.7121 14.967L27.4787 20.867Z"
              stroke="white"
            />
          </svg>
          <p className="text-[#231F20] text-3xl font-bold"> ویژگی های ما</p>
        </div>
        <div className="grid grid-cols-4 gap-13  mx-auto ">
          {content.map((item , key)=>{
            return(
            <div
            key={key}
            style={{
              background: "linear-gradient(180deg, #FFF 0%, #E3DCFF 100%)",
              boxShadow: "8px 12px 50px 0px rgba(163, 163, 163, 0.08)",
            }}
            className="gap-13 flex flex-col items-center border-[1px] border-[#E3DCFF] rounded-2xl px-4 pt-18 pb-12 justify-center h-fi"
          >
            {item.svg}
            <div className="grid gap-2">
              <p className=" text-lg text-black font-semibold text-center">{item.title}              </p>
              <p className=" text-[#565656] text-[16px] font-medium text-center">{item.Description} </p>
            </div>
          </div>
              
            )
          })}
          
         
        </div>
      </div>
    </>
  );
};
export default OurFeatures;
