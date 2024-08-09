import React, { useState } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



function Jobsbox() {
    const [value,setvalue] =useState('')
const options =[
    {label:"Any category",value:1},
    {label:"Content Writing",value:2},
    {label:"Customer Service",value:3},
    {label:"Design Creatives",value:4},
    {label:"Devleopment IT",value:5},
]

const details = [
    { heading: "Tele-Caller", headindsm: "@Travel Your Date", line: "", location: " Shivajinagar, Pune", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "Content Writer", headindsm: "@VM3 Techsolution", line: "", location: "Pune (Remote)", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "Relationship Manager", headindsm: "Indian-Drivers", line: "", location: " Wagholi, Pune (Remote)", img: "https://internscope.com/wp-content/uploads/2024/04/WhatsApp-Image-2022-11-04-at-11.19.19-AM-150x150.jpeg" },
    { heading: "Social Media Strategist", headindsm: "D. K. Mission Force", line: "", location: "Navi Mumbai", img: "https://internscope.com/wp-content/uploads/2024/04/Logo_Black1-150x150.png" },
    { heading: "Telesales Representative", headindsm: "Bloom Hair Transplant", line: "", location: "Bloom Hair Transplant, 1st Floor 1B Nand Ashish CHS Ltd. RB Mehta Marg, Pravin Class Ghatkoper East Mumbai Suburban Maharashtra-400077", img: "https://internscope.com/wp-content/uploads/2024/04/BHT-LOGO-1.png-1-150x136.webp" },
    { heading: "Field Officer", headindsm: "Magic Moppers India", line: "", location: "Pune", img: "https://internscope.com/wp-content/uploads/2024/04/magic-moppers.webp" },
  ];

function handalSelect(event){
        setvalue(event.target.value)
}

  return (
    <div className='Jobsnavbar w-full  mt-[13vw] '>
   

        <div className='w-full   flex mt-[5vw]'>
       <div className='leftcard  ml-[8vw]   w-[60vw] h-[150vw]'>
        <h1 className='text-[3vw] font-mono font-bold '>Jobs</h1>
        <div className='w-[55vw] h-[21vw] bg-[#8080802e]'>
        <div className='LeftTop mt-[3vw] w-full h-[23vw]  '>
        <div className='text-[1.3vw] border-[2px] px-[2vw] py-[2vw] '>
            <div className='flex gap-[1vw]  py-[2vw]'>
                    <input className='border-[2px] px-[1vw] w-full py-[0.6vw]' type="text" placeholder='Keywords' />
                    <input className='border-[2px] px-[1vw] w-full' type="text" placeholder='Location' />
            </div>       

                    <select className='form-select w-full h-[4vw] py-[0.7vw] px-[1vw]' onChange={handalSelect}>
                        {options.map(options=>(
                            <option value={options.value}>{options.label}</option>
                        ))}
                    </select>

                    <button className='bg-[#2b6566]  w-full mt-[2vw] p-[0.5vw] font-semibold text-[white]'>Search Jobs</button>
                    
                  </div>
        
    </div>
    </div>

          <div className='lefttbottom w-[55vw] h-[full '>
            <div className=' '>
              {details.map((s)=>(
                <div className='5Box mt-[5vw] mr-[5vw] mb-[2.5vw] h-[15vw] w-[55vw]  border-[1px]  border-[grey]  p-6 bg-[white]'>
                <div className='flex gap-3'> 
                        <img className='w-[5vw] h-[5vw] ' src={s.img} alt="" />
                    <div className=''>
                        <h1 className='text-[1.3vw] font-bold'>{s.heading}</h1>
                        <h6 className='text-[1.4vw]'>{s.headindsm}</h6>
                        <div className='w-[43vw] h-[0.1px] mt-2 mb-2 bg-[#8080809b]'></div>
                        <span className='flex items-center gap-1'>
                        <FaMapMarkerAlt/>
                        <h2 className='text-[1.2vw]'>{s.location}</h2>
                        </span>
                        <button className='text-[1vw] mt-[1vw] font-semibold font-sans border-solid border-[1px] border-[#808080fe] rounded-xl bg-[#F5BF0C] px-5 py-1'>ON-ROLL</button>
    
                    </div>
                </div>
                
            </div>
              ))}
          
        
    </div>
            </div>              

    </div>

    <div className='Rightdiv w-[30vw] pl-[2vw] h-full  '>
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

export default Jobsbox