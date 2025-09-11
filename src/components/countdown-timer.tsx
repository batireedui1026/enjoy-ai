"use client";
import React, { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  endDate: string;
  onTimerExpired: () => void; // Хугацаа дуусахыг мэдэгдэх callback
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  endDate,
  onTimerExpired,
}) => {
  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const creationTime = new Date(endDate).getTime();
    const endTime = creationTime + 10 * 60 * 1000;
    const currentTime = new Date().getTime();
    const difference = endTime - currentTime;

    if (difference <= 0) {
      onTimerExpired();
      return null;
    }

    return {
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [endDate, onTimerExpired]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return (
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
        төлбөр төлөх хугацаа дууссан байна
      </span>
    );
  }

  return (
    <div>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-bold text-green-600 ring-1 ring-green-600/20 ring-inset">
        {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
};

export default CountdownTimer;
