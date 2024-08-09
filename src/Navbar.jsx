// import React from 'react'
// import { FaShoppingCart } from "react-icons/fa";
// import { Link} from 'react-router-dom';

// function Navbar() {
//   return (

// <>
//     <div className='Navbar shadow shadow-gray-300 lg absolute z-[9999] top-0 mt-[2.5vw] w-full  bg-[white]  px-[10vw]  flex items-center  justify-between'>
//     <img className='w-[12vw] h-[4.5vw] py-[0.5vw] ml-[3.8vw] ' src="https://internscope.com/wp-content/uploads/2024/04/cropped-cropped-Untitled-design.png" alt="" />
//     <div className='flex gap-[2.5vw] text-[1.2vw] font-[ "Inter", Sans-serif] font-semibold text-[#000000ca] px-[4vw]'>
//          <Link className=' text-[#f5bf0c]' to="/">Home</Link>
//     <Link className=' opacity-3 hover:text-[#f5bf0c]' to="/intership">Traning & Internship</Link>
//     <Link className=' hover:text-[#f5bf0c]' to="/jobsbox">Jobs</Link>
//     <Link className=' hover:text-[#f5bf0c]' to="/employlogin">Employer Login</Link>
//     <Link className=' hover:text-[#f5bf0c]' to="/myaccount">My account</Link>
//     </div>
//     <span className='text-[1.5vw]'>
//      <FaShoppingCart/>
//     </span>
// </div>
//       </>
//   )
// }

// export default Navbar


  
import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  const [showPostJob, setShowPostJob] = useState(false);

  const handleLinkClick = () => {
    setShowPostJob(true);
  };

  return (
    <>
      <div className='Navbar shadow shadow-gray-300 lg:absolute z-[9999] top-0 mt-[2.5vw] w-full bg-[white] px-[10vw] flex items-center justify-between'>
        <img
          className='w-[12vw] h-[4.5vw] py-[0.5vw] ml-[3.8vw]'
          src="https://internscope.com/wp-content/uploads/2024/04/cropped-cropped-Untitled-design.png"
          alt=""
        />
        <div className='flex gap-[2.5vw] text-[1.2vw] font-[ "Inter", Sans-serif] font-semibold text-[#000000ca] px-[4vw]'>
          <Link className='text-[#f5bf0c]' to="/" onClick={() => setShowPostJob(false)}>Home</Link>
          <Link className='opacity-3 hover:text-[#f5bf0c]' to="/intership" onClick={handleLinkClick}>Training & Internship</Link>
          <Link className='hover:text-[#f5bf0c]' to="/jobsbox" onClick={handleLinkClick}>Jobs</Link>
          <Link className='hover:text-[#f5bf0c]' to="/employlogin" onClick={handleLinkClick}>Employer Login</Link>
          <Link className='hover:text-[#f5bf0c]' to="/myaccount" onClick={handleLinkClick}>My account</Link>
        </div>
        <span className=' '>
          {showPostJob ? (
            <Link to="/postjob" className='text-[1.3vw] font-[ "Inter", Sans-serif]  hover:text-[#f5bf0c] font-[700] border px-[0.8vw] py-[0.7vw] rounded-full text-white bg-[#2b6566]'>Post Job</Link>
          ) : (
            <div className='flex '>
              <FaShoppingCart />
              <h1 className='text-[0.9vw] text-[white] bg-[red] rounded-full h-[1.2vw] w-[1vw] flex item-center justify-center'>1</h1>
            </div>
          )}
        </span>
      </div>
    </>
  );
}

export default Navbar;

