import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

import Job from './Job';
import Card from './Card';
import Fivebox from './Fivebox';
import Testimonials from './Testimonials';


function Home() {
  const fbox = [
    { heading: "Tele-Caller", headindsm: "@Travel Your Date", line: "", location: "Shivajinagar, Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/05/WhatsApp-Image-2024-05-21-at-17.22.57-150x150.jpeg" },
    { heading: "Content Writer", headindsm: "@VM3 Techsolution", line: "", location: "Pune (Remote)", img: "https://internscope.com/wp-content/plugins/wp-job-manager/assets/images/company.png" },
    { heading: "UI/UX Designer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Wagholi, Pune (Remote)", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
    { heading: "Web Developer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Wagholi, Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
    { heading: "Web Developer", headindsm: "@ VM3 Tech Solutions LLP", line: "", location: "Pune", img: "https://internscope.com/wp-content/uploads/job-manager-uploads/company_logo/2024/03/logo-150x100-1.png" },
  ];

  return (
    <div >
       <img className='backgroundimage absolute z-0 mt-[-0.2vw] w-full h-[44vw] ' src="https://plus.unsplash.com/premium_photo-1682141288451-9919b15490f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwbGFwdG9wJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
    <div className='Home-page relative flex flex-col items-center   z-[999] w-full h-[43.7vw] bg-[#2b6566d4]'>
        <div className='Searchbar  mt-[17vw] flex flex-col items-center justify-center text-[white] '>
             <h1 className='Text font-[900] font-["Inter", Sans-serif]  text-[3.7vw] text-[white]'>
              <span className='text-[#F5BF0C]'>Over 1200+</span>
              jobs are waiting for you
             </h1>
              <span className='Searchbar mt-[3vw] flex  items-center justify-center '>
             <input className='px-[8vw] text-[blue] font-bold rounded-l-md mt-[1vw] py-[0.5vw]' type="text" placeholder ='Search..' />
             <FaSearch className=' text-[3.2vw] px-[0.9vw] mt-[1vw]  rounded-r-md  bg-[#f5bf0c]' />
              </span>
              <h2 className='mt-[2vw] text-[1.3vw] font-[ "Inter", Sans-serif]'>Popular Searches: Web Developer, Graphics Designer</h2>
        </div>

        <div className='3logo flex  text-[white] font-bold mt-10'>
            <span className='flex items-center font-bold text-[white]  '>
            <RiFocus3Line className='text-[4vw]'/>
              <h1 className='ml-6 mr-4'>1200+ <br /> Available Jobs</h1>
            </span>
            <span className='flex items-center font-bold text-[white] ' >
              <RiGroupLine className='text-[4vw]'/>
              <h1 className='ml-6 mr-4'>650+
               <br /> Employers</h1>
            </span >
            <span className='flex items-center font-bold text-[white]'>
            <CgFileDocument className='text-[4vw] ' />
              <h1 className='ml-6 mr-4'>1500+
              <br /> CV's & Resumes</h1>
            </span>
        </div>
        
    </div>

    <>
      <Job />
      <Card />
      <div className='bg-[#f1f4f4] w-full h-[65vw] px-[8vw]'>
        <div>
          <h1 className='flex items-center pt-[5vw] justify-center text-[2.2vw] font-[900]'>Find The Career You Deserve</h1>
          {fbox.map((itm, index) => (
            <Fivebox key={index} img={itm.img} location={itm.location} heading={itm.heading} headindsm={itm.headindsm} />
          ))}
        </div>
      </div>
      <Testimonials />
    </>

    </div>
  )
}

export default Home


