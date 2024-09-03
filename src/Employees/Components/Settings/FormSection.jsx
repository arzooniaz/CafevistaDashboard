import React, { useState } from 'react';
import { GoPerson } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GiRecycle } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import countryList from 'react-select-country-list';

const iconStyles = "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400";

const FormField = ({ label, value, onChange, isPasswordSection }) => {
    const countries = countryList().getData();

    const renderIcon = () => {
        if (isPasswordSection) return null;

        const icons = {
            "First Name": <GoPerson className={iconStyles} />,
            "Last Name": <GoPerson className={iconStyles} />,
            "Email": <BsEnvelope className={iconStyles} />,
            "Phone": <FiPhone className={iconStyles} />,
            "Role": <GiRecycle className={iconStyles} />
        };

        return icons[label] || null;
    };

    const renderInput = () => {
        if (label === "Country") {
            return (
                <select
                    name={label}
                    value={value}
                    onChange={onChange}
                    className="bg-white block h-10 w-full text-sm p-2 rounded-lg border border-gray-300 text-black"
                >
                    <option value="" disabled>Select Country</option>
                    {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                            {country.label}
                        </option>
                    ))}
                </select>
            );
        }

        const inputProps = {
            name: label,
            value: value,
            onChange: onChange,
            className: "bg-white block h-10 w-full text-sm p-2 rounded-lg border border-gray-300 text-black",
            placeholder: label === "Phone" ? "123-456-7890" : `Enter your ${label.toLowerCase()}`
        };

        return (
            <input
                {...inputProps}
                type={
                    isPasswordSection
                        ? label === "Phone no verification" ? "number" : "password"
                        : label === "Phone" ? "number" : label === "Email" ? "email" : "text"
                }
            />
        );
    };

    return (
        <div className="relative">
            {renderInput()}
            {renderIcon()}
        </div>
    );
};

const FormSection = ({ profileData }) => {
    const isPasswordSection = profileData.btns.some(label => label.includes("Password"));

    const [formValues, setFormValues] = useState(
        profileData.btns.reduce((acc, label) => ({ ...acc, [label]: '' }), {})
    );

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const renderProfileSection = () => (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 sm:ml-8 ml-0 sm:mr-8 mr-0">
            {profileData.btns.map((btnLabel, index) => (
                <div key={index} className="form-group">
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-400">{btnLabel}</label>
                        {btnLabel === "First Name" && (
                            <div className="flex items-center cursor-pointer group">
                                <CiEdit className="text-gray-400 ml-2 group-hover:text-black group-active:text-black" />
                                <span className="text-sm font-sm text-gray-400 ml-1 group-hover:text-black group-active:text-black">
                                    Edit
                                </span>
                            </div>
                        )}
                    </div>
                    <FormField
                        label={btnLabel}
                        value={formValues[btnLabel] || ''}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );

    const renderPasswordSection = () => (
        <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col gap-6 w-full sm:w-[45%]">
                {profileData.btns.slice(0, 3).map((btnLabel, index) => (
                    <div key={index} className="form-group">
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-medium text-gray-400">{btnLabel}</label>
                        </div>
                        <FormField
                            label={btnLabel}
                            value={formValues[btnLabel] || ''}
                            onChange={handleChange}
                            isPasswordSection={true}
                        />
                    </div>
                ))}
                <button
                    className="self-center border border-gray-300 px-3 py-2 rounded-md text-black font-bold mt-5 sm:mt-0.5"
                >
                    Save
                </button>
            </div>

            <div className="flex flex-col gap-6 w-full sm:w-[45%]">
                {profileData.btns.slice(3).map((btnLabel, index) => (
                    <div key={index} className="form-group">
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-medium text-gray-400">{btnLabel}</label>
                        </div>
                        <FormField
                            label={btnLabel}
                            value={formValues[btnLabel] || ''}
                            onChange={handleChange}
                            isPasswordSection={true}
                        />
                    </div>
                ))}
                <button
                    className="self-center border border-gray-300 px-3 py-2 rounded-md text-black font-bold mt-5 sm:mt-0.5"
                >
                    Verify
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-4 justify-center">
            {isPasswordSection ? renderPasswordSection() : renderProfileSection()}
        </div>
    );
};

export default FormSection;
