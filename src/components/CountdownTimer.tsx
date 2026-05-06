/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: string; // "HH:mm"
}

export default function CountdownTimer({ targetTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const [hours, minutes] = targetTime.split(':').map(Number);
      
      const target = new Date();
      target.setHours(hours, minutes, 0, 0);

      // If target time is earlier than now, assume it's tomorrow (but for the demo we'll just show "Closed")
      if (target.getTime() < now.getTime()) {
        setTimeLeft("Дүкен жабық");
        return;
      }

      const diff = target.getTime() - now.getTime();
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${h > 0 ? h + 'сағ ' : ''}${m}м ${s}с`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return <span>{timeLeft}</span>;
}
