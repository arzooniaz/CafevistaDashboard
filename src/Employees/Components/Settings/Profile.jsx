import React, { useState, useRef } from 'react';
import FormSection from './FormSection.jsx';
import { ProfileData } from "./Utilities";
<<<<<<< HEAD
import elipse16 from "../../Assets/Ellipse 16.png";
import { MessagesData } from '../Chatting/Utilities';
=======
import defaultimg from "../../Assets/Images/default.png";
>>>>>>> 171c0f1 (Temporary commit to save changes)
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Profile() {
    const [profileData, setProfileData] = useState(ProfileData);
<<<<<<< HEAD
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

=======
    const [profileImage, setProfileImage] = useState(defaultimg);
    const fileInputRef = useRef(null);

>>>>>>> 171c0f1 (Temporary commit to save changes)
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
<<<<<<< HEAD
        <div className="px-6 py-6 h-auto bg-white w-full w-[85vw] sm:w-[90vw] md:w-[90vw] lg:w-[75vw] xl:w-[75vw] max-w-[1200px] flex flex-col rounded-md"
>
=======
        <div className="px-6 py-6 h-auto bg-white w-full max-w-[90vw] sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[75vw] flex flex-col rounded-md">
>>>>>>> 171c0f1 (Temporary commit to save changes)
            <div className="relative self-center sm:self-start">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-[80px] h-[80px] mb-5 rounded-full object-cover ml-8"
                />
                <input
                    type="file"
                   accept=".jpg, .jpeg, .png"
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
<<<<<<< HEAD
                className="self-center sm:self-end border border-gray-300 px-3 py-2 rounded-md text-black font-bold mt-5 sm:mt-2.5 transform transition-transform duration-300 hover:scale-105"
                onClick={handleSave}
=======
                className="self-center sm:self-end mr-0 sm:mr-8 border border-gray-300 px-3 py-2 rounded-md text-black font-bold mt-5 sm:mt-2.5"
>>>>>>> 171c0f1 (Temporary commit to save changes)
            >
                Save
            </button>
        </div>
    );
}

