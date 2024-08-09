import React, { useState } from 'react';

function Employlogin() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full screen   bg-[#80808021]  mt-[10vw] ">
        <h1 className='text-[2vw] ml-[25vw] text-[black] font-semibold'>My account</h1>
      <div className="signbox w-[37vw] ml-[30vw]  bg-[#80808073] mt-[2vw] border border-b-2 rounded-xl   overflow-hidden p-[2vw] ">
        <div className="twobutton w-full h-[4vw] rounded-xl flex items-center justify-center bg-gray-500 text-white">
          <button
            className={`w-1/2 rounded-xl h-full  ${isLogin ? 'bg-[black]' : 'bg-gray-500'}`}
            onClick={() => setIsLogin(true)}>Login</button>
          <button
            className={`w-1/2 rounded-xl  h-full ${!isLogin ? 'bg-[black]' : 'bg-gray-500'}`}
            onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? 
          <div className='Form'>
            <h1 className="text-[2vw]  text-[black] mt-[3vw] mb-[1vw] font-bold">Login Form</h1>
            <div className="Twoinputsearch">
              <input className="w-full border border-b-2 mb-[1.5vw] rounded-md py-[0.3vw]" type="email" placeholder="Email" />
              <input className="w-full mb-[1.5vw]  border border-b-2 rounded-md py-[0.3vw]" type="password" placeholder="Password" />
              <a className="text-blue-500  ml-[12.9vw]" href="#">
                Forgot password?
              </a>
              <button className="rounded-md py-[0.5vw] text-white mt-[2vw] bg-[black] w-full">Login</button>
              <p className="ml-[4vw] text-[black] mt-[2vw]">
                Not a member?{' '}
                <a className="text-blue-500" href="#" onClick={() => setIsLogin(false)}>
                  Signup Now
                </a>
              </p>
            </div>
          </div>
         : 
          <>
            <h1 className="text-[2vw] text-[black] mt-[1vw] mb-[1vw] font-bold">SignUp Form</h1>
            <div className="Twoinputsearch">
              <input className="w-full mb-[1vw]  border border-b-2 rounded-md py-[0.3vw]" type="email" placeholder="Email" />
              <div className=''>
              <input className="w-[16vw]  border border-b-2 mb-[1vw] mr-[1vw] rounded-md py-[0.3vw]" type="email" placeholder="First Name" />
              <input className="w-[15vw] mb-[1vw]  border border-b-2 rounded-md py-[0.3vw]" type="email" placeholder="Last Name" />
              </div>
              <input className="w-full mb-[1vw]  border border-b-2 rounded-md py-[0.3vw]" type="password" placeholder="Password" />
              <input className="w-full mb-[1vw] rounded-md  border border-b-2 py-[0.3vw]" type="password" placeholder="Confirm Password" />
              <input className="w-full mb-[1vw] rounded-md py-[0.3vw]  border border-b-2" type="text" placeholder="Mobile Number " />
              <button className="rounded-md py-[0.5vw] text-white mt-[1vw] bg-[black] w-full">SignUp</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Employlogin;
