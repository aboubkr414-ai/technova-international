"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-12-01T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-16 flex justify-center gap-6 flex-wrap">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-28 text-center border border-white/20">
      <div className="text-4xl font-bold text-white">
        {value}
      </div>

      <div className="text-blue-100 mt-2">
        {label}
      </div>
    </div>
  );
}