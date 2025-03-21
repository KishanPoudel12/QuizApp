import React, { useEffect, useState, useRef } from "react";

const useTimer = (submitted) => {
const [seconds, setSeconds] = useState(0);

const interval = useRef(null);

const startTimer=()=>{
interval.current = setInterval(() => {
  setSeconds((prev) => prev + 1);
}, 1000);
}

const stopTimer=()=>{
    clearInterval(interval.current);
}

useEffect(() => {
  if(!submitted){
    startTimer()
  }
  return () => clearInterval(interval.current);
}, [submitted]);

  return { seconds, startTimer, stopTimer };
};

export default useTimer;
