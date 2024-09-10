import { useState } from 'react';
import React from "react";
import loginboard from '../../assets/login-board.png';
import show from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import companyLogo from '../../assets/Companylogo.png';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/google.png';
import facebookIcon from '../../assets/facebook.png';


const Login = () => {

  const LoginWithGoogle=()=>{
     
    window.location.href = 'http://localhost:8000/auth/google';

}

  const [formData, setFormData] = useState({
    companyName: "",
    companyNumber: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // const [isCompany, setIsCompany] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center mt-10 items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[1200px]  mt-5 relative rounded-xl bg-white overflow-hidden text-left text-xl text-darkslateblue font-poppins">
        <div className="relative flex">

          <div className="w-1/2 bg-darkslateblue h-[830px]" />
          <div className="w-1/2 p-8 flex flex-col h-[830px]">
            <div className="flex-grow flex flex-col justify-center">
              <b className="text-[42px] inline-block mb-4">WELCOME</b>
              <b className="text-[26px] inline-block mb-16">LOGIN</b>

              <div className="mb-12">
                <div className="relative">
                  <input
                    className="w-full rounded-mini bg-white box-border h-[60px] border-[2px] border-solid border-darkslateblue px-4"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="absolute top-[-24px] left-[26px] bg-white px-2">
                    <b className="text-[18px]">Email</b>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input
                    className="w-full rounded-mini bg-white box-border h-[60px] border-[2px] border-solid border-darkslateblue px-4"
                    type={showPassword ? "text" : "password"} // Toggle type based on showPassword state
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                  <div className="absolute top-[-24px] left-[26px] bg-white px-2">
                    <b className="text-[16px]">Password</b>
                  </div>
                  <button
                    className="absolute right-4 top-1/2 bg-white transform -translate-y-1/2 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img
                        className="w-6 bg-white h-6"
                        alt="Hide Password"
                        src={hide} // Replace with your SVG icon for hiding password
                      />
                    ) : (
                      <img
                        className="w-6 bg-white h-6"
                        alt="Show Password"
                        src={show} // Replace with your SVG icon for showing password
                      />
                    )}
                  </button>
                </div>
              </div>

              <button className="w-full h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md mb-12">
                <b>LOGIN</b>
              </button>
            </div>

            <div className="flex items-center my-4">
                    <hr className="flex-1 border-t border-gray-500" />
                    <span className="px-4 text-gray-500">or</span>
                    <hr className="flex-1 border-t border-gray-500" />
                  </div>

              <div className="flex justify-center space-x-6 mb-6">
                <div className="w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                  <img onClick={LoginWithGoogle} src={googleIcon} alt="Google" className="w-8 h-8" />
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                  <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
                </div>
              </div>

            <div className="text-center mb-6">
              <span className="font-medium  text-black text-[18px]">Don't Have an Account?</span>
              <span className="font-medium ml-2 text-[18px]  cursor-pointer"><Link to="/RegisterChoice">Sign Up</Link></span>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[45%] left-[90px] w-[32%] transform -translate-y-1/2 object-cover"
          alt="Data Security Illustration"
          src={loginboard}
        />
        <img
          className="absolute top-4 left-4 w-32 h-32 object-contain"
          alt="Company Logo"
          src={companyLogo}
        />
      </div>
    </div>
  );
};

export default Login;