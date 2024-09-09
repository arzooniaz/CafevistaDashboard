import React from 'react';
import FormSection from './FormSection.jsx';
import { PasswordData } from "./Utilities";

export default function Password() {
    return (
        <div className="px-6 py-6 h-auto bg-white w-full max-w-[90vw] sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[75vw] flex flex-col rounded-md">
            <h1 className="text-black font-bold text-xl sm:text-2xl mt-5 mb-8 ml-0 sm:ml-8 md:ml-8 text-center sm:text-left lg:ml-9 xl:ml-9">Change Password</h1>
            <FormSection profileData={PasswordData} />
        </div>
    );
}
