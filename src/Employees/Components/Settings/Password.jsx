import React from 'react';
import FormSection from './FormSection.jsx';
import { PasswordData } from "./Utilities";

export default function Password() {
    return (
        <div className="px-6 py-6 h-auto bg-white w-full w-[85vw] sm:w-[90vw] md:w-[90vw] lg:w-[75vw] xl:w-[75vw] max-w-[1200px] flex flex-col rounded-md">
            <h1 className="text-black font-bold text-xl sm:text-2xl mt-5 mb-8 ml-0 sm:ml-8 md:ml-8 text-center sm:text-left lg:ml-10 xl:ml-12">Change Password</h1>
            <FormSection profileData={PasswordData} />
        </div>
    );
}


