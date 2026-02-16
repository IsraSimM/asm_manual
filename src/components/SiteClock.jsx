import { useEffect, useState } from 'react';

export default function SiteClock() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="corner-clock" aria-label="Hora actual">
      <span className="corner-clock__label">Hora</span>
      <span className="corner-clock__time">{time}</span>
    </div>
  );
}
