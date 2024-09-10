import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterChoice() {
  const navigate = useNavigate();

  const handleChoice = (userType) => {
    if (userType === 'buyer') {
        navigate(`/registeruser?userType=${userType}&accountType=individual`);
      } else {
        navigate('/acounttype?userType=seller');
      }
    
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <h2 className='text-2xl mb-8 font-extrabold'>Register</h2>
      <h3 className='text-xl mt-2 mb-4'>Are you a buyer or a seller?</h3>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-8'>
          <button
            className="w-64 h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md"
            onClick={() => handleChoice('buyer')}
          >
            Buyer
          </button>
          <button
            className="w-64 h-14 text-[24px] text-white bg-darkslateblue rounded-mini shadow-md"
            onClick={() => handleChoice('seller')}
          >
            Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterChoice;
