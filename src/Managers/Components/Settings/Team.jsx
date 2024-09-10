import { GoPerson } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineFileZip, AiOutlineUser, AiOutlineDelete } from 'react-icons/ai';
import { teamData } from "./Utilities";
import { useState } from "react";

export default function Team() {
    const [data, setData] = useState(teamData);
    const [isOpen, setIsOpen] = useState(null);

    // Format the date to 'DD-MMM-YYYY'
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options).replace(/\s/g, '-');
    };

    const removeMember = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        setIsOpen(null);
    };

    const archiveMember = (index) => {
        alert(`${data[index].name} has been archived.`);
        setIsOpen(null);
    };

    const toggleDropdown = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="px-4 sm:px-6 py-6 h-auto lg:h-[526px] bg-white w-full max-w-[100vw] sm:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[75vw] flex flex-col rounded-md">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">Team Setting</h1>
            <div className="relative overflow-y-none">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="text-left text-xs sm:text-sm border-b border-black">
                            <th className="p-2 sm:p-4 border-b border-black">Name</th>
                            <th className="p-2 sm:p-4 border-b border-black">Date Added</th>
                            <th className="p-2 sm:p-4 border-b border-black">Last Login</th>
                            <th className="p-2 sm:p-4 border-b border-black">Team</th>
                            <th className="p-2 sm:p-4 border-b border-black"></th>
                        </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm">
                        {data.map((member, index) => (
                            <tr key={index} className="relative border-b border-black ">
                                <td className="p-2 sm:p-4 flex items-center ">
                                    <GoPerson className="text-gray-500 mr-2 text-xs sm:text-base" />
                                    <span>{member.name}</span>
                                </td>
                                <td className="p-2 sm:p-4 ">{formatDate(member.dateAdded)}</td>
                                <td className="p-2 sm:p-4 ">{formatDate(member.lastLogin)}</td>
                                <td className="p-2 sm:p-4 ">
                                    <div className="flex gap-1 sm:gap-2 flex-wrap">
                                        {member.team.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-200 text-blue-600 px-1 sm:px-2 py-1 rounded-[3px] text-xs sm:text-sm border border-gray-400"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-2 sm:p-4 relative border-b border-black">
                                    <button
                                        className="text-gray-500 focus:outline-none"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        <FiMoreVertical className="text-base sm:text-lg" />
                                    </button>
                                    {isOpen === index && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50">
                                            <button className="flex items-center px-2 sm:px-4 py-1 sm:py-2 w-full hover:bg-gray-100 text-left text-xs sm:text-sm">
                                                <AiOutlineUser className="mr-1 sm:mr-2" />
                                                View Profile
                                            </button>
                                            <button
                                                className="flex items-center px-2 sm:px-4 py-1 sm:py-2 w-full hover:bg-gray-100 text-left text-xs sm:text-sm"
                                                onClick={() => removeMember(index)}
                                            >
                                                <AiOutlineDelete className="mr-1 sm:mr-2" />
                                                Remove
                                            </button>
                                            <button
                                                className="flex items-center px-2 sm:px-4 py-1 sm:py-2 w-full hover:bg-gray-100 text-left text-xs sm:text-sm"
                                                onClick={() => archiveMember(index)}
                                            >
                                                <AiOutlineFileZip className="mr-1 sm:mr-2" />
                                                Archive
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
