import React from 'react';
import SingleNotifi from './SingleNotifi';
import { NotificationData } from './Utilities';

export default function NotifiCard({ prop, h, m, objKey }) {
    const cardStyle = {
        height: h,
        marginTop: m, 
    };

    const notifications = NotificationData[objKey];

    return (
        <div 
            className="px-4 sm:px-10 py-4 sm:py-6 bg-white w-full max-w-[875px] flex flex-col" 
            style={cardStyle}
        >
            <h1 className="text-base sm:text-lg font-medium mb-4">{prop}</h1>
            <div>
                {notifications.map((activity, index) => (
                    <SingleNotifi
                        key={index}
                        index={index}
                        Data={notifications}
                    />
                ))}
            </div>
        </div>
    );
}

