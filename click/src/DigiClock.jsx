import React, {useState} from 'react';

const DigiClock = () => {
    let time = new Date().toLocaleTimeString();
    const [cTime, SetTime] = useState(time);

    const UpdateT = () => {
        time = new Date().toLocaleTimeString();
        SetTime(time);
    };

    setInterval(UpdateT, 1000);
    return(
        <>
            <h1>{cTime}</h1>
        </>
    );
};

export default DigiClock;
