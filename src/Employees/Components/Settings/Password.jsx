import React from 'react';
import FormSection from './FormSection.jsx';
import { PasswordData } from "./Utilities";

export default function Password() {
    return (
        <div className="px-6 py-6 h-auto bg-white w-[90vw] max-w-[875px] flex flex-col rounded-md" >
            <h1 className="text-black font-bold text-xl sm:text-2xl mt-5 mb-8 sm:ml-8 ml-0 text-center sm:text-left">Change Password</h1>
            <FormSection profileData={PasswordData} />
        </div>
    );
}


