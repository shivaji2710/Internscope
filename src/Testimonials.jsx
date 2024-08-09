import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const data =[
    {para:"It is Very good company. It's mentor is always supported to an employees. They have helping and family nature. It's very good company to gaining new things related to IT fields and always provided a chance to employee to prove themselves.",name:"Bhavesh Sonar"},
    {para:"I started my career in VM3 Tech Solutions LLP.It is a very good place for internship. The staff is also very helpful.I would like to thank the director Vasanti madam and the entire management staff from the bottom of my heart.",name:"Abhijeet Joshi"},
    {para:"One of the best place to start your industrial career with. Especially for digital marketing,software testing,content writing as well as web designing,VM3 Tech Solutions is well known for. If you are a fresher/completing your degree,then get your internship done here.",name:"Sarvesh Buyre"},
    {para:"It is the best company for internship. I joined this internship for 1 month which is very great experience. I learned here so many things like digital marketing , testing and so many. This team is very good.",name:"Arati chavan"},
    {para:"VM3 Tech Solution is the best company for internship.I did 6 months of internship here which is very great experience. I learn Graphic Design and so many technical things which is very useful to my future. The staff is also Helpful and supportive. Thank you VM3 Tech Solution.",name:"Akash Temgire"},
    {para:"It is best company for internship .I joint this company for internship . I learn  in internship Digital marketing , Manual testing and so many things. it give a best experience . It is useful for develop your technical knowledge .",name:"Utkarsha Patil"},
  ]

  return (
    <div className='relative w-full h-[43vw] overflow-hidden bg-[#00000091]'>
     <div>
     <img className='absolute z-[-1]  w-full h-[43vw]' src="https://internscope.com/wp-content/themes/jobscout/images/testimonial-bg.jpg" alt="" />
     </div>

     <div className="text w-full h-[43vw]">

     <h1 className='text-[2.5vw] pt-[5vw] text-[white]  mb-[3.5vw]   flex justify-center items-center  font-[700]'>Testimonials</h1>

<div className='w-[85vw]  rounded-xl overflow-hidden  h-[16vw]  px-[2.5vw] ml-[8vw]'>
  <div className=''>
<Slider {...settings}>
     {data.map((d)=>(
      <div className=  " slide-box  px-[2vw] py-[2vw] mt-[.5vw]  rounded-xl w-[30vw] h-[15vw] bg-[white]">
      <p className='text-[1vw]'>{d.para}</p>
      <h1 className=" mt-[1vw] mr-[2vw] font-[700] flex justify-end">{d.name}</h1>
</div>
     ))}

      </Slider>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Testimonials
