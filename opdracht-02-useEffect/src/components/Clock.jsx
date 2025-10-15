import React, { useEffect, useState } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime]  =  useState(new Date());

    useEffect(() => {
        const intervalId =  setInterval(()  => {
            const updateTime = currentTime.getTime;
            

        },1000);
    })
}

const DateToday = () => {
    
}