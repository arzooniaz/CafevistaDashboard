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
            className="px-14 py-6 h-auto bg-white w-full w-[85vw] sm:w-[90vw] md:w-[90vw] lg:w-[75vw] xl:w-[75vw] max-w-[1100px] flex flex-col rounded-md" 
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