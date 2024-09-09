import React, { useState } from 'react';

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isOn}
                    onChange={handleToggle}
                />
                <div className={`toggle-track bg-gray-300 w-12 h-5 rounded-full transition-colors ${isOn ? 'bg-blue-300' : 'bg-gray-300'}`}>
                    <div
                        className={`toggle-thumb w-6 h-5 bg-white rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
                    />
                </div>
            </div>
        </label>
    );
}