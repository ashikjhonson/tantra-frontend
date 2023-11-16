import React, { useState, useEffect } from "react";

const CountDown = () => {
  const calculateTimeRemaining = () => {
    const endDate = new Date("2023-12-04T12:00:00+05:30");
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = Math.floor(difference / 1000);
    return {
      days: Math.floor(seconds / (3600 * 24)),
      hours: Math.floor((seconds % (3600 * 24)) / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60,
    };
  };

  const [time, setTime] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => calculateTimeRemaining(prevTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [time.seconds]);

  return (
    <div className="text-center mt-8">
      <h1>Remaining</h1>
      {time ? (
        <p className="text-2xl font-bold mb-4">
          {time.days} D {time.hours} H {time.minutes} M {time.seconds} S
        </p>
      ) : (
        <p className="text-2xl font-bold mb-4">Countdown has ended!</p>
      )}
    </div>
  );
};

export default CountDown;
