import React from 'react'

function Job() {
  return (
    <div className='w-full h-[26vw]  flex relative'>
        <div className='w-[50vw] '>
        <div>
            <img  className="absolute z-0 w-[50vw] h-[26vw]" src="https://internscope.com/wp-content/uploads/2024/03/30282.jpg" alt="" />
            <div className='Text px-[5vw] py-[5vw] absolute z-[999] bg-[#1a1919ba]  font-bold text-[white]'>
                <div className='w-[39.2vw] h-[16vw]'>
                <h1 className='font-bold text-[2.5vw] text-white'>Register for Employers</h1>
                 <span>
                    <h2>▶ Publish Job Post Less Than 1 Rupees Per Day</h2>
                    <h2>▶ Access to Wide Talentpool</h2>
                    <h2>▶ Targeted Recruitment </h2>
                    <h2>▶ Brand Visibility</h2>
                 </span>
                 <button className='bg-[#F5BF0C] text-[white] px-[2vw] py-[0.5vh] font-bold rounded-xl  mt-[2vw]  '>sing</button>
                </div>
            </div>
            
        </div>
        </div>

        <div className='w-[50vw] relative'>
        <div className='overlay  '>
            <img className='absolute z-[1]  w-[49vw] h-[26vw]' src="https://internscope.com/wp-content/uploads/2024/03/banner-img-1.jpg" alt="" />
            <div className='Text   py-[5vw] bg-[#1a19198d]  absolute z-[10] font-bold text-[white]'>
            <div className=' w-[49.2vw]  pl-[5vw] h-[16vw]'>
            <h1 className='font-bold text-[2.5vw] text-[white]' >
                Register for Training Program</h1>
                 <span>
                    <h2>▶ 
                    Learn From Industry Experts</h2>
                    <h2>▶ Career Grow</h2>
                    <h2>▶ Opportunity to Work On Live Projects</h2>
                    <h2>▶ Easy Application Process</h2>
                 </span>
                 <button className='bg-[#f5bf0c]  text-[white] px-[2vw] py-[0.5vh] font-bold rounded-xl mt-[2vw]'>Enroll Now</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Job

