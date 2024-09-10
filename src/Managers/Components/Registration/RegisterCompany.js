import React, { useState } from "react";
import signupBoard from '../../assets/sign-upBoard.png';
import googleIcon from '../../assets/google.png';
import show from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import facebookIcon from '../../assets/facebook.png';
import CompanyLogo from '../../assets/Companylogo.png';
import { useLocation } from 'react-router-dom';



const CompanyRegister = () => {
  const location = useLocation();
  
  const userType = new URLSearchParams(location.search).get('userType');
  const accountType = new URLSearchParams(location.search).get('accountType');

  const [formData, setFormData] = useState({
    userType,
    accountType,
    companyName: "",
    companyEmail: "",
    companyPhoneNumber: "",
    companyWebsite: "",
    companySize: "",
    noOfTeams: "",
    companyCountry: "",
    companyPassword: "",
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
  const LoginWithGoogle=()=>{
     
    window.location.href = 'http://localhost:8000/auth/google';

}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const renderSlide1 = () => (
    <>
      <InputField name="companyName" label="Company Name" value={formData.companyName} onChange={handleInputChange} />
      <InputField name="companyEmail" label="Company Email" type="email" value={formData.companyEmail} onChange={handleInputChange} />
      <InputField name="companyPhoneNumber" label="Company Phone Number" value={formData.companyPhoneNumber} onChange={handleInputChange} />
      <InputField name="companyWebsite" label="Company Website" value={formData.companyWebsite} onChange={handleInputChange} />
    </>
  );

  const renderSlide2 = () => (
    <>
      <SelectField name="companySize" label="Company Size" value={formData.companySize} onChange={handleInputChange}>
        <option value="">Select Company Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </SelectField>
      <InputField name="noOfTeams" label="Number of Teams" value={formData.noOfTeams} onChange={handleInputChange} />
      <InputField name="companyCountry" label="Company Country" value={formData.companyCountry} onChange={handleInputChange} />
      <PasswordField name="companyPassword" label="Company Password" value={formData.companyPassword} onChange={handleInputChange} showPassword={showPassword} setShowPassword={setShowPassword} />
    </>
  );

  return (
    <div className="flex justify-center mt-11 items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full  flex flex-col sm:flex-row  max-w-[1200px] relative rounded-xl bg-white overflow-hidden text-left text-xl text-darkslateblue font-poppins">
        <div className="relative flex ">
          <div className="  flex  w-1/2  bg-darkslateblue h-[830px]" />
          <div className="sm:w-full md:w-1/2 p-8 flex flex-col h-[830px] justify-center">
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex flex-row mb-8">
                <b className="text-[42px] inline-block">WELCOME</b>
              </div>
              <div className="flex flex-row mb-6">
                <b className="text-[26px] inline-block">Company Sign Up</b>
              </div>
              
              {currentSlide === 1 ? renderSlide1() : renderSlide2()}
              
              <button 
                className="w-full h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md mb-6"
                onClick={() => currentSlide === 1 ? setCurrentSlide(2) : handleSubmit()}
              >
                <b>{currentSlide === 1 ? "NEXT" : "REGISTER COMPANY"}</b>
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
                      <img  onClick={LoginWithGoogle} src={googleIcon} alt="Google" className="w-8 h-8" />
                    </div>
                    <div className="w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                      <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="font-medium text-black text-[18px]">Already have a Company Account?</span>
                    <span className="font-medium ml-2 text-[18px] cursor-pointer">Login Here</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="">
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
    </div>
  );
};

const InputField = ({ name, label, type = "text", value, onChange }) => (
  <div className="mb-6">
    <div className="relative">
      <input 
        className="w-full rounded-mini bg-white box-border h-[60px] border-[2px] border-solid border-darkslateblue px-4"
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
        className="w-full rounded-mini bg-white box-border h-[60px] border-[2px] border-solid border-darkslateblue px-4"
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

const PasswordField = ({ name, label, value, onChange, showPassword, setShowPassword }) => (
  <div className="mb-6">
    <div className="relative">
      <input 
        className="w-full rounded-mini bg-white box-border h-[60px] border-[2px] border-solid border-darkslateblue px-4"
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

export default CompanyRegister;