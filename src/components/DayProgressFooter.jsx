import { useEffect, useState } from 'react';

export default function DayProgressFooter() {
  const [dayPercentage, setDayPercentage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState('Calculando...');

  useEffect(() => {
    const updateDayProgress = () => {
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

      const timeElapsed = now - startOfDay;
      const totalTime = endOfDay - startOfDay;
      const percentage = Math.min(100, Math.max(0, Math.floor((timeElapsed / totalTime) * 100)));

      const totalMinutesLeft = 24 * 60 - (now.getHours() * 60 + now.getMinutes());
      const hoursLeft = Math.floor(totalMinutesLeft / 60);
      const minutesLeft = totalMinutesLeft % 60;

      setDayPercentage(percentage);
      setTimeRemaining(`Quedan ${hoursLeft}h ${minutesLeft}m del día`);
    };

    updateDayProgress();
    const intervalId = setInterval(updateDayProgress, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="day-progress-footer widget-surface">
      <div className="day-progress-footer__header">
        <h2>Progreso del día</h2>
        <span className="day-progress-footer__percent">{dayPercentage}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-bar" style={{ width: `${dayPercentage}%` }} />
      </div>
      <p className="helper-text">{timeRemaining}</p>
    </section>
  );
}
