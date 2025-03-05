"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

const Header=()=>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 400) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
    const headerList=[
        {title:"خانه",href:"/"},
        {title:"خدمات",href:"/Services"},
        {title:"حسنیکال",href:"/hesnical"},
        {title:"ارتباط با ما",href:"/contactUs"},
        {title:"اخبار و تحلیل",href:"/news"},
        {title:"بلاگ",href:"/blog"}

    ]
    return(
        <div className={`flex gap-12  p-4 bg-white w-full h-fit fixed z-50 transition-shadow duration-300 ${
            isScrolled ? "shadow-2xl" : "shadow-none"
          }`}>
            {/* <div className="">
             <Image
                        src="/images/hesniLogo.png"
                        width={isScrolled?40:78}
                        height={isScrolled?40:81}
                        alt="Chart"
                      /></div> */}
                      <div className="mx-auto flex gap-12 " >
            {headerList.map((item,key)=>{
                return(
                    <div key={key}>
                        <Link href={item.href}>{item.title}</Link>
                    </div>
                )
            })}</div>

        </div>
    )
}
export default Header 