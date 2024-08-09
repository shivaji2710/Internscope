import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoSearchOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from 'react-icons/fa';


function Card() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const data = [
    { Courses: "-- Basic Courses", Coursesname: "Basic Graphics Design Course", image: "https://internscope.com/wp-content/uploads/2024/02/123706-300x300.jpg", price: "₹10,000" },
    { Courses: "-- Advance Courses", Coursesname: "Advance Graphics Design Course", image: "https://internscope.com/wp-content/uploads/2024/02/marketing-strategy-planning-strategy-concept-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Basic Courses", Coursesname: "Basic Basic UI/UX Design Course", image: "https://internscope.com/wp-content/uploads/2024/02/2150201871-300x300.jpg", price: "₹10,000" },
    { Courses: "-- Advance Courses", Coursesname: "Advance UI/UX Design Course", image: "https://internscope.com/wp-content/uploads/2024/02/2150104479-1-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Basic Courses", Coursesname: "Basic Website Devlopment Course", image: "https://internscope.com/wp-content/uploads/2024/02/120045-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Advance Courses", Coursesname: "Advance Website Devlopment Course", image: "https://internscope.com/wp-content/uploads/2024/02/120045-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Basic Courses", Coursesname: "Basic Video Editing Course", image: "https://internscope.com/wp-content/uploads/2024/02/3406-3-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Advance Courses", Coursesname: "Advance Video Editing Course", image: "https://internscope.com/wp-content/uploads/2024/02/3406-3-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Basic Courses", Coursesname: "Basic Digital Marketing Course", image: "https://internscope.com/wp-content/uploads/2024/02/94833-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Advance Courses", Coursesname: "Advance Digital Marketing Course", image: "https://internscope.com/wp-content/uploads/2024/02/120045-300x300.jpg", price: "₹15,000" },
    { Courses: "-- Uncategorized", Coursesname: "Digital Market For Bussiness Owener", image: "https://internscope.com/wp-content/uploads/2024/02/digital-marketing-masterclass_1029473-216048-300x300.jpg", price: "₹15,000" },
  ];


  return (
    <div className='Cardsize w-[100vw] px-[5vw] font  gap-2 h-[32vw]  bg-[#00000066] '>
<Slider className=''  {...settings}>
       {data.map((d)=>(
         <div className='Cardhandal ml-[1.9vw] p-1 px-[1vw] '>
         <div className='relative card w-[21vw] h-[28.5vw] rounded-2xl  overflow-hidden  bg-[white]'>
         <div className='w-full h-[20vw] bg-[black] '>
         <img className='w-full h-[20vw] bg-[black] ' src={d.image} alt="" />
         <div className='absolute top-[20%] right-[10%] w-[4vw] h-[9vw] bg-[white]'>
          <div className='flex flex-col items-center gap-[1.5vw] py-[1vw]'>
          <IoSearchOutline/>
          <span className='bg-[white]' >
          <FcLike/>
          </span >
          <span  className='cursor-pointer '>
          <FaShoppingCart/>
          </span>
          </div>
         </div>
         </div>
         <div className='px-5 py-3'>
         <h1 className='text-[1vw]  '>{d.Courses}</h1>
             <h2 className='text-[#F5BF0C] text-[1.2vw] font-semibold'>{d.Coursesname}</h2>
             <h3 className='font-bold text-[#000000ac] text-[1.2vw] '>{d.price}</h3>
         </div>
         </div>
     </div>
       ))}
      </Slider>

        </div>
  )
}

export default Card 






