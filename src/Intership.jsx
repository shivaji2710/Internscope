import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Intership() {

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

  const details = [
    { heading: "Tele-Caller", headindsm: "@Travel Your Date", line: "", location: " Shivajinagar, Pune", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "Content Writer", headindsm: "@VM3 Techsolution", line: "", location: "Pune (Remote)", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "Relationship Manager", headindsm: "Indian-Drivers", line: "", location: " Wagholi, Pune (Remote)", img: "https://internscope.com/wp-content/uploads/2024/04/WhatsApp-Image-2022-11-04-at-11.19.19-AM-150x150.jpeg" },
    { heading: "Social Media Strategist", headindsm: "D. K. Mission Force", line: "", location: "Navi Mumbai", img: "https://internscope.com/wp-content/uploads/2024/04/Logo_Black1-150x150.png" },
    { heading: "Telesales Representative", headindsm: "Bloom Hair Transplant", line: "", location: "Bloom Hair Transplant, 1st Floor 1B Nand Ashish CHS Ltd. RB Mehta Marg, Pravin Class Ghatkoper East Mumbai Suburban Maharashtra-400077", img: "https://internscope.com/wp-content/uploads/2024/04/BHT-LOGO-1.png-1-150x136.webp" },
    { heading: "Field Officer", headindsm: "Magic Moppers India", line: "", location: "Pune", img: "https://internscope.com/wp-content/uploads/2024/04/magic-moppers.webp" },
  ];

  const [value,setvalue] =useState('')
  const options =[
      {label:"Any category",value:1},
      {label:"Content Writing",value:2},
      {label:"Customer Service",value:3},
      {label:"Design Creatives",value:4},
      {label:"Devleopment IT",value:5},
  ]
  
  function handalSelect(event){
          setvalue(event.target.value)
  }

  return (
    <div className='w-full  '>
    <div className='w-full  flex mt-[13vw]'>
          <div className='Leftdiv w-[70vw] h-[220vw]'>
          <div className='LeftTop mt-[3vw] w-full h-[23vw]  flex'>

          <div className='leftcard ml-[8vw]  w-[30vw] h-[23vw]'>
           <img className="absolute z-0 w-[30vw] h-[23vw]" src="https://internscope.com/wp-content/uploads/2024/03/30282.jpg" alt="" />
           <div className='Text w-[30vw] h-[23vw] pl-[4vw] py-[5vw] absolute z-[999] bg-[#1a1919ba] font-bold text-[white]'>
             <div className='w-[26vw] h-[14vw] '>
               <h1 className='font-bold text-[1.5vw] mb-[1vw] text-white'>Register for Employers</h1>
               <span className='text-[1.2vw] font-[500]'>
                 <h6>▶ Contrary to popular belief</h6>
                 <h6>▶ It is a long established fact that a reader</h6>
                 <h6>▶ Many desktop publishing packages</h6>
               </span>
               <button className='bg-[#F5BF0C] text-[white] px-[2vw] py-[0.5vh] font-bold rounded-xl mt-[2vw] text-[1vw]'>Sing</button>
             </div>
           </div>
         </div>

         <div className='rightcard w-[30vw] h-[23vw]'>
           <img className="absolute z-0 w-[30vw] h-[23vw]" src="https://internscope.com/wp-content/uploads/2024/03/banner-img-1.jpg" alt="" />
           <div className='Text w-[30vw] h-[23vw] pl-[4vw] py-[5vw] absolute z-[999] bg-[#1a1919ba] font-bold text-[white]'>
             <div className='w-[26vw] h-[14vw] '>
               <h1 className='font-bold text-[1.5vw] mb-[1vw] text-white'>Register for Internship</h1>
               <span className='text-[1.2vw] font-[500]'>
               <h6>▶ There are many variations of passages</h6>
                  <h6>▶ It is a long established fact that a reader</h6>
                   <h6>▶ There are many variations of passages</h6>
               </span>
               <button className='bg-[#F5BF0C] text-[white] px-[2vw] py-[0.5vh] font-bold rounded-xl mt-[2vw] text-[1vw]'>Enroll Now</button>
             </div>
           </div>
         </div>

          </div>

          <div  className='LeftBottom Cardsize mt-[2.5vw] w-[70vw] px-[5vw] font  gap-2 h-[32vw] flex flex-wrap  '>
       {data.map((d)=>(
         <div className='Cardhandal ml-[1.9vw] p-1 px-[1vw] '>
         <div className='card border-[0.1px] shadow-lg shadow-grey-500/50 border-black  w-[21vw] h-[30vw] rounded-2xl  overflow-hidden  bg-[white]'>
         <img className='w-full h-[18vw] bg-[black]' src={d.image} alt="" />
         <div className='px-5 py-3'>
         <h1 className='text-[1vw]  '>{d.Courses}</h1>
             <h2 className='text-[#F5BF0C] text-[1.2vw] font-semibold'>{d.Coursesname}</h2>
             <h3 className='font-bold text-[#000000ac] text-[1.2vw] '>{d.price}</h3>
             <button className='text-[1vw] flex mt-[1vw] px-[6vw] py-[0.4vw] rounded-xl bg-[#F5BF0C] w-full'>COMPARE</button>
         </div>
         </div>
     </div>
       ))}

        </div>

          </div>



          <div className='Rightdiv w-[30vw] pl-[2vw] h-screen '>
            <div className='righttop'>
                <h1 className='text-[1.5vw] font-semibold'>Search</h1>
                <span className='Searchbar  mt-[1vw] flex  items-center justify-center '>
             <input className='px-[8vw]  border-[2px] w-[20vw] text-[blue] text-[1vw] font-bold rounded-l-md mt-[1vw] py-[0.6vw]' type="text" placeholder ='Search..' />
             <FaSearch className=' text-[2.7vw] px-[0.8vw] mt-[1vw]  rounded-r-md  bg-[#f5bf0c]' />
              </span>

            <h1 className='text-[1.5vw] font-semibold mt-[5vw]'>Recent Jobs</h1>
                  <div className='text-[1.3vw] border-[2px] '>
                    <h2>Keywords</h2>
                    <input className='border-[2px] ' type="text" placeholder='Keywords' />
                    <h2>Location</h2>
                    <input className='border-[2px] ' type="text" placeholder='Location' />
                    <h1>Category</h1>
                    
                    <select className='form-select w-full py-[0.3vw] border-[gray] border-[0.3px]' onChange={handalSelect}>
                        {options.map(options=>(
                            <option value={options.value}>{options.label}</option>
                        ))}
                    </select>
                    <button className='bg-[#2b6566]  rounded-md px-[1vw] mt-[2vw] p-[0.5vw] font-semibold text-[white]'>Search Jobs</button>
                  </div>
            </div>

            <div className='rightbottom'>
            <div className=' inline-block  '>
              {details.map((s)=>(
                <div className='5Box mt-[5vw] mr-[5vw] mb-[2.5vw] h-[18vw] w-[25vw]  border-[1px]  border-[grey]  p-6 bg-[white]'>
                <div className='flex gap-3'> 
                        <img className='w-[5vw] h-[5vw] ' src={s.img} alt="" />
                    <div className=''>
                        <h1 className='text-[1.3vw] font-bold'>{s.heading}</h1>
                        <h6 className='text-[1.2vw]'>{s.headindsm}</h6>
                        <div className='w-[15vw] h-[0.1px] mt-2 mb-2 bg-[#8080809b]'></div>
                        <span className='flex items-center gap-1'>
                        <FaMapMarkerAlt/>
                        <h2 className='text-[0.9vw]'>{s.location}</h2>
                        </span>
                        <button className='text-[1vw] mt-[1vw] font-semibold font-sans border-solid border-[1px] border-[#808080fe] rounded-xl bg-[#F5BF0C] px-5 py-1'>ON-ROLL</button>
    
                    </div>
                </div>
                
            </div>
              ))}
          
        
    </div>
            </div>
          </div>
    </div>
    

    
      </div>
  )
}

export default Intership




