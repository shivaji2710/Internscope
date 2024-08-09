import React, { useState } from 'react';

function Employlogin() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full screen   bg-[#00000096] flex items-center justify-center">
      <div className='w-[60vw] flex mb-[3vw]'>
        <div className='w-[24vw] h-full  mt-[10vw]'>
          <img className='w-[24vw] h-[43vw]' src="https://internscope.com/wp-content/plugins/easy-login-woocommerce/assets/images/popup-sidebar.jpg" alt="" />
        </div>
      <div className="signbox w-[36vw] mt-[10vw]  bg-[#cee6e162] overflow-hidden p-[2vw] ">
        <div className="twobutton w-full h-[4vw] rounded-xl flex items-center justify-center bg-gray-500 text-white">
          <button
            className={`w-1/2 rounded-xl h-full ${isLogin ? 'bg-[#2b6566]' : 'bg-gray-500'}`}
            onClick={() => setIsLogin(true)}>Login</button>
          <button
            className={`w-1/2 rounded-xl h-full ${!isLogin ? 'bg-[#2b6566]' : 'bg-gray-500'}`}
            onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? 
          <div className='Form'>
            <h1 className="text-[2vw] mt-[3vw] mb-[1vw] font-bold">Login Form</h1>
            <div className="Twoinputsearch">
              <input className="w-full mb-[1.5vw] rounded-md py-[0.3vw]" type="email" placeholder="Email" />
              <input className="w-full mb-[1.5vw] rounded-md py-[0.3vw]" type="password" placeholder="Password" />
              <a className="text-blue-500  ml-[12.9vw]" href="#">
                Forgot password?
              </a>
              <button className="rounded-md py-[0.5vw] text-white mt-[2vw] bg-[#2b6566] w-full">Login</button>
              <p className="ml-[4vw] mt-[2vw]">
                Not a member?{' '}
                <a className="text-blue-500" href="#" onClick={() => setIsLogin(false)}>
                  Signup Now
                </a>
              </p>
            </div>
          </div>
         : 
          <>
            <h1 className="text-[2vw] mt-[1vw] mb-[1vw] font-bold">SignUp Form</h1>
            <div className="Twoinputsearch">
              <input className="w-full mb-[1vw] rounded-md py-[0.3vw]" type="email" placeholder="Email" />
              <div className=''>
              <input className="w-[16vw] mb-[1vw] mr-[1vw] rounded-md py-[0.3vw]" type="email" placeholder="First Name" />
              <input className="w-[15vw] mb-[1vw] rounded-md py-[0.3vw]" type="email" placeholder="Last Name" />
              </div>
              <input className="w-full mb-[1vw] rounded-md py-[0.3vw]" type="password" placeholder="Password" />
              <input className="w-full mb-[1vw] rounded-md py-[0.3vw]" type="password" placeholder="Confirm Password" />
              <button className="rounded-md py-[0.5vw] text-white mt-[1vw] bg-[#2b6566] w-full">SignUp</button>
            </div>
          </>
        }
      </div>
      </div>
    </div>
  );
}

export default Employlogin;
