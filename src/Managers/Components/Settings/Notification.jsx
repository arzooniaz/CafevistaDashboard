import React from 'react';
import NotifiCard from './NotifiCard';

export default function Notification() {
    return (
        <div className="flex flex-col ">
            <NotifiCard 
                prop="Get notified about new activities in project" 
                h={250} 
                m={0} 
                objKey="newActivities" 
            />
            <NotifiCard 
                prop="Get notified wherever you are" 
                h={160} 
                m={20} 
                objKey="noti" 
            />
        </div>
    );
}
