import React, { useState } from "react";

import signupBoard from "../../Assets/Images/sign-upBoard.png";
import googleIcon from "../../Assets/Images/google.png";
import show from "../../Assets/Images/show.svg";
import hide from "../../Assets/Images/hide.svg";
import facebookIcon from "../../Assets/Images/facebook.png";
import CompanyLogo from "../../Assets/Images/Companylogo.png";
import { useLocation } from "react-router-dom";
// import "./RegisterUser.css";
const Company1 = () => {
  const location = useLocation();

  const userType = new URLSearchParams(location.search).get("userType");
  const accountType = new URLSearchParams(location.search).get("accountType");

  const [formData, setFormData] = useState({
    userType,
    accountType,
    Fullname: "",
    Email: "",
    PhoneNumber: "",
    companyOrIndividual: "",
    checkBusiness: "",
    businessSize: "",
    businessWebsite: "",
    country: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const LoginWithGoogle = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  const renderSlide1 = () => (
    <>
      <InputField
        name="Fullname"
        label="Full Name"
        value={formData.Fullname}
        onChange={handleInputChange}
      />
      <InputField
        name="Email"
        label="Email"
        type="email"
        value={formData.Email}
        onChange={handleInputChange}
      />
      <InputField
        name="PhoneNumber"
        label="Phone Number"
        value={formData.PhoneNumber}
        onChange={handleInputChange}
      />
      <SelectField
        name="companyOrIndividual"
        label="Company or Individual"
        value={formData.companyOrIndividual}
        onChange={handleInputChange}
      >
        <option value="">Select Type</option>
        <option value="Company">Company</option>
        <option value="Individual">Individual</option>
      </SelectField>
      <SelectField
        name="checkBusiness"
        label="Business Type"
        value={formData.checkBusiness}
        onChange={handleInputChange}
      >
        <option value="">Select Business Type</option>
        <option value="Type1">Type 1</option>
        <option value="Type2">Type 2</option>
        <option value="Type3">Type 3</option>
      </SelectField>
    </>
  );

  const renderSlide2 = () => (
    <>
      <SelectField
        name="businessSize"
        label="Business Size"
        value={formData.businessSize}
        onChange={handleInputChange}
      >
        <option value="">Select Business Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </SelectField>
      <InputField
        name="businessWebsite"
        label="Business Website"
        value={formData.businessWebsite}
        onChange={handleInputChange}
      />
      <InputField
        name="country"
        label="Country"
        value={formData.country}
        onChange={handleInputChange}
      />
      <PasswordField
        name="Password"
        label="Password"
        value={formData.Password}
        onChange={handleInputChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </>
  );

  return (
    <div className="flex justify-center mt-11 items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-[1200px] mt-8 relative rounded-xl bg-white overflow-hidden text-left text-xl text-[#04316D] font-poppins">
        <div className="relative flex ">
          <div className="w-1/2 bg-[#04316D] h-[880px]" />
          <div className="w-1/2 p-8 flex flex-col h-[880px] justify-center">
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex flex-row mb-8">
                <b className="text-[42px] inline-block">WELCOME</b>
              </div>
              <div className="flex flex-row mb-6">
                <b className="text-[26px] inline-block">Sign Up</b>
              </div>

              {currentSlide === 1 ? renderSlide1() : renderSlide2()}

              <button
                className="w-full h-14 text-[24px] text-white bg-[#04316D] rounded-xl shadow-md mb-6"
                onClick={() =>
                  currentSlide === 1 ? setCurrentSlide(2) : handleSubmit()
                }
              >
                <b>{currentSlide === 1 ? "NEXT" : "SIGNUP"}</b>
              </button>

              {currentSlide === 1 && (
                <>
                  <div className="flex items-center my-4">
                    <hr className="flex-1 border-t border-gray-500" />
                    <span className="px-4 text-gray-500">or</span>
                    <hr className="flex-1 border-t border-gray-500" />
                  </div>

                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                      <img
                        onClick={LoginWithGoogle}
                        src={googleIcon}
                        alt="Google"
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                      <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="font-medium text-black text-[18px]">
                      Already have an Account?
                    </span>
                    <span className="font-medium ml-2 text-[18px] cursor-pointer">
                      Login Here
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <img
          className="absolute top-[50%] left-[90px] w-[32%] transform -translate-y-1/2 object-cover"
          alt="Signup Illustration"
          src={signupBoard}
        />
        <img
          className="absolute top-4 left-4 w-32 h-32 object-contain"
          alt="Company Logo"
          src={CompanyLogo}
        />
      </div>
    </div>
  );
};

const InputField = ({ name, label, type = "text", value, onChange }) => (
  <div className="mb-6">
    <div className="relative">
      <input
        className="w-full rounded-xl  bg-white box-border h-[60px] border-[2px] border-solid border-[#04316D] px-4"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <div className="absolute top-[-24px] left-[26px] bg-white px-2">
        <b className="text-[16px]">{label}</b>
      </div>
    </div>
  </div>
);

const SelectField = ({ name, label, value, onChange, children }) => (
  <div className="mb-6">
    <div className="relative">
      <select
        className="w-full rounded-xl bg-white box-border h-[60px] border-[2px] border-solid border-[#04316D] px-4"
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      <div className="absolute top-[-14px] left-[26px] bg-white px-2">
        <b className="text-[16px]">{label}</b>
      </div>
    </div>
  </div>
);

const PasswordField = ({
  name,
  label,
  value,
  onChange,
  showPassword,
  setShowPassword,
}) => (
  <div className="mb-6">
    <div className="relative">
      <input
        className="w-full rounded-xl bg-white box-border h-[60px] border-[2px] border-solid border-[#04316D] px-4"
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      <div className="absolute top-[-24px] left-[26px] bg-white px-2">
        <b className="text-[16px]">{label}</b>
      </div>
      <button
        className="absolute right-4 top-1/2 bg-white transform -translate-y-1/2 focus:outline-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        <img
          className="w-6 bg-white h-6"
          alt={showPassword ? "Hide Password" : "Show Password"}
          src={showPassword ? hide : show}
        />
      </button>
    </div>
  </div>
);

export default Company1;
