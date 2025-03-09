"use client";
import { useState } from "react";
import { negative, positive } from "./svg";

const SelectedQuestion = () => {
  const [showItem, setShowItem] = useState(null);

  const questions = [ 
    {
      title: "چطور می‌توانم از خدمات حسنیکال استفاده کنم؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید. پس از ایجاد حساب کاربری، به تمامی ابزارها و محتوای آموزشی دسترسی خواهید داشت.",
    },
    {
      title: "از کجا باید شروع کنم؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: " آیا پشتیبانی و مشاوره آنلاین برای من فراهم است؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: "چگونه می‌توانم از تحلیل‌های لحظه‌ای و ابزارهای حرفه‌ای بهره‌مند شوم؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: " آیا حسنیکال برای افراد مبتدی مانند من مناسب است؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: "از کجا می‌توانم هزینه‌ها و تعرفه‌های اشتراک را ببینم؟",
      description: "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
  ];

  return (
    <div className="grid gap-8">
      {questions.map((item, key) => (
        <div key={key} className="grid gap-4">
          <button
            className="flex items-start gap-8"
            aria-expanded={showItem === key}
            onClick={() => setShowItem(showItem === key ? null : key)}
          >
            <span>{showItem !== key ? positive : negative}</span>
            <span className="grid gap-2">
              <p className="text-start text-lg text-[#181D27] font-medium">{item.title}</p>
              <p
                className={`text-start text-[16px] text-[#535862] overflow-hidden transition-[opacity,max-height] duration-500 ease-in-out ${
                  showItem === key ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                }`}
              >
                {item.description}
              </p>
            </span>
          </button>
          <hr className="border-b-[1px] border-[#E9EAEB]" />
        </div>
      ))}
    </div>
  );
};

export default SelectedQuestion;
