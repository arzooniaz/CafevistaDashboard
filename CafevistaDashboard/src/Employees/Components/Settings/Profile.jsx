import React, { useState, useRef } from 'react';
import FormSection from './FormSection.jsx';
import { ProfileData } from "./Utilities";
import elipse16 from "../../Assets/Ellipse 16.png";
import { MessagesData } from '../Chatting/Utilities';
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Profile() {
    const [profileData, setProfileData] = useState(ProfileData);
    const [profileImage, setProfileImage] = useState(elipse16);
    const fileInputRef = useRef(null);

    const handleSave = () => {
        const updatedMessagesData = MessagesData.map(message => {
            if (message.mail === profileData.btns[0]) {
                return {
                    ...message,
                    ...profileData
                };
            }
            return message;
        });

        setProfileData({ ...profileData, ...profileData });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="px-6 py-6 h-auto bg-white w-[90vw] max-w-[875px] flex flex-col rounded-md">
            <div className="relative self-center sm:self-start">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-[80px] h-[80px] mb-5 rounded-full object-cover ml-8"
                />
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                />
                <div className="absolute ml-8 inset-0 w-[80px] h-[80px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 cursor-pointer"
                        onClick={handleIconClick}
                    >
                        <FaCloudUploadAlt className="text-3xl text-white" />
                    </div>
                </div>
            </div>
            <FormSection profileData={profileData} />
            <button
                className="self-center sm:self-end border border-gray-300 px-3 py-2 rounded-md text-black font-bold mt-5 sm:mt-2.5 transform transition-transform duration-300 hover:scale-105"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    );
}

