import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AcountType() {
  const navigate = useNavigate();
  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');

  const handleChoice = (accountType) => {
    if (accountType === 'individual') {
      navigate(`/registeruser?userType=${userType}&accountType=individual`);
    } else {
      navigate(`/registercompany?userType=${userType}&accountType=company`);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <h2 className='text-2xl mb-8 font-extrabold'>Register as Seller</h2>
      <h3 className='text-xl mt-2 mb-4'>Are you an individual or a company?</h3>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-8'>
          <button
            className="w-64 h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md"
            onClick={() => handleChoice('individual')}
          >
            Individual
          </button>
          <button
            className="w-64 h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md"
            onClick={() => handleChoice('company')}
          >
            Company
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcountType;
