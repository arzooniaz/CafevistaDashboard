import React from 'react';
import ToggleButton from './ToggleButton';

export default function SingleNotifi({ index, Data }) {
    return (
        <div className="flex flex-row justify-between items-center p-2 text-sm font-semibold sm:text-base">
            <p className="truncate">{Data[index]}</p>
            <ToggleButton />
        </div>
    );
}

