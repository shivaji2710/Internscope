import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';




function Fotter() {
  return (
    <div className='w-full   p-[3vw] text-[white] h-[20vw] bg-[#000000]  '>
    <div className='w-full flex items-center  '>
        <img className='w-[15vw] mr-[5vw] ml-[7vw]'  src="https://internscope.com/wp-content/uploads/2024/05/nternscope-330x190.png" alt="" />
        <div className='flex w-[65vw] h-[10vw] justify-between bg-[#00000052]'>
            <div className='flex flex-col mr-[5vw]'>
            <h1 className='mb-[2vw] font-bold '>Service</h1>
                <Link className='text-[1.2vw]' to ="/" >Home</Link>
                <Link className='text-[1.2vw]' to="/intership" >Traning and Intership</Link>
                <Link className='text-[1.2vw]' to="/jobsbox">Job</Link>
            </div>

            <div className='flex flex-col mr-[7vw]'>
            <h1 className='mb-[2vw] font-bold '>Supports</h1>
            
                {/* <a className='text-[1.2vw]' href=" #privacypolicy">Privacy Policy</a> */}
                <a href="#">Privacy Policy</a>
                <a className='text-[1.2vw]' href="#Traning and Intership ">Terms and Conditions </a>
                <a className='text-[1.2vw]' href="#Job ">Refund and Returns Policy</a>
            </div>

            <div className='mr-[7vw]'>
            <h1 className='mb-[2vw] mr-[8vw] font-bold '>Reach US</h1>
                <span>
                     <h1 className='bg-[#8080804c] text-[1.2vw] font-semibold hover:cursor-pointer'>📧info@internscope.com</h1>
                     <div className='Logo flex   mt-[1vw] gap-[1.7vw] '>
                        <a href=""> <FaFacebook className='bg-[#f9f0f071] rounded-full hover:cursor-pointer text-[2vw] px-[1vh] py-[1vh]'/></a>
                   
                    <a href="https://www.linkedin.com/company/internscope-career">
                    <FaLinkedin className='bg-[#f9f0f071] rounded-full hover:cursor-pointer text-[2vw] px-[1vh] py-[1vh]'/>
                    </a>

                    <a href="https://www.instagram.com/internscope.career/">
                    <FaInstagramSquare className='bg-[#f9f0f071] rounded-full hover:cursor-pointer text-[2vw] px-[1vh] py-[1vh]'/>
                    </a>

                    <a href="https://www.youtube.com/@Internscope">
                    <FaYoutube className='bg-[#f9f0f071] rounded-full hover:cursor-pointer text-[2vw] px-[1vh] py-[1vh]'/>
                    </a>

                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Finternscope">
                    <FaTwitter className='bg-[#f9f0f071] rounded-full hover:cursor-pointer text-[2vw] px-[1vh] py-[1vh]'/>
                    </a>

                     </div>
                </span>
            </div>
        </div>
       
    </div  >
            <h1 className='flex items-center  justify-center mt-[3vw] text-[1.2vw] font-semibold'>© Copyright All Rights Reserved | Design & Developed By VM3 Tech Solutions LLP</h1>
    </div>
  )
}

export default Fotter

