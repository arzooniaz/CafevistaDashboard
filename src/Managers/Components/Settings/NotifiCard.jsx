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
            className="px-6 py-6 h-auto bg-white w-full max-w-[90vw] sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[75vw] flex flex-col rounded-md" 
            style={cardStyle}
        >
            <h1 className="text-base sm:text-lg font-normal mb-4">{prop}</h1>
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
