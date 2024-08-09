import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";



    function Fivebox({img,location,heading,headindsm}) {
        return (
            <div className=' inline-block  '>
              <div className='5Box  mr-[5vw] mb-[2.5vw] h-[15vw] w-[35vw]  border-[1px]  border-[grey]  p-6 bg-[white]'>
                  <div className='flex gap-3'> 
                          <img className='w-[8vw] h-[7vw] ' src={img} alt="" />
                      <div className=''>
                          <h1 className='text-[1.3vw] font-bold'>{heading}</h1>
                          <h6 className='text-[1.2vw]'>{headindsm}</h6>
                          <div className='w-[21vw] h-[0.1px] mt-2 mb-2 bg-[#8080809b]'></div>
                          <span className='flex items-center gap-1'>
                          <FaMapMarkerAlt/>
                          <h2 className='text-[1.2vw]'>{location}</h2>
                          </span>
                          <button className='text-[1vw] mt-[1vw] font-semibold font-sans border-solid border-[1px] border-[#808080fe] rounded-xl bg-[#F5BF0C] px-5 py-1'>ON-ROLL</button>
      
                      </div>
                  </div>
                  
              </div>
          
        
    </div>
  )
}

export default Fivebox

