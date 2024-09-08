import React from 'react';
import ToggleButton from './ToggleButton';

export default function SingleNotifi({ index, Data }) {
    return (
<<<<<<< HEAD
        <div className="flex flex-row justify-between items-center p-2 text-sm font-semibold sm:text-base">
=======
        <div className="flex flex-row justify-between items-center p-2 text-sm font-normal sm:text-base">
>>>>>>> 171c0f1 (Temporary commit to save changes)
            <p className="truncate">{Data[index]}</p>
            <ToggleButton />
        </div>
    );
}
<<<<<<< HEAD

=======
>>>>>>> 171c0f1 (Temporary commit to save changes)
