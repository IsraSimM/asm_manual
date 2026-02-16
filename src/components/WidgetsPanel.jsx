import { useCallback, useEffect, useState } from 'react';
import {
  FaCalendarCheck,
  FaClock,
  FaDollarSign,
  FaPalette,
  FaRedo,
  FaSyncAlt,
} from 'react-icons/fa';

const colorPool = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#FFA07A',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E2',
  '#F8B88B',
  '#AB63FA',
  '#FF00FF',
  '#00FFFF',
  '#FFD700',
  '#FF1493',
  '#00CED1',
  '#667eea',
  '#764ba2',
  '#f093fb',
  '#f5576c',
  '#43e97b',
];

const pickRandomColor = () => colorPool[Math.floor(Math.random() * colorPool.length)];

export default function WidgetsPanel() {
  const [time, setTime] = useState('00:00:00');
  const [dateLabel, setDateLabel] = useState('Cargando...');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [dayPercentage, setDayPercentage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState('Calculando...');
  const [color, setColor] = useState(() => pickRandomColor());

  const updateClock = useCallback(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const dateString = now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setTime(timeString);
    setDateLabel(dateString.charAt(0).toUpperCase() + dateString.slice(1));
  }, []);

  const updateExchange = useCallback(async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      if (!response.ok) {
        throw new Error('API Error');
      }
      const data = await response.json();
      const rate = data?.rates?.MXN;
      if (typeof rate === 'number') {
        setExchangeRate(rate);
      } else {
        setExchangeRate(17.5);
      }
    } catch (error) {
      console.error('Error:', error);
      setExchangeRate(17.5);
    }
  }, []);

  const updateDayProgress = useCallback(() => {
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
  }, []);

  const generateColor = useCallback(() => {
    setColor(pickRandomColor());
  }, []);

  useEffect(() => {
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [updateClock]);

  useEffect(() => {
    updateDayProgress();
    const intervalId = setInterval(updateDayProgress, 1000);
    return () => clearInterval(intervalId);
  }, [updateDayProgress]);

  useEffect(() => {
    updateExchange();
    const intervalId = setInterval(updateExchange, 300000);
    return () => clearInterval(intervalId);
  }, [updateExchange]);

  return (
    <section className="widgets-panel">
      <div className="widgets-panel__container">
        <header className="widgets-header">
          <h1>4 Widgets Funcionales</h1>
          <p className="subtitle">Datos en tiempo real y widgets interactivos</p>
        </header>

        <div className="widgets-grid">
          <article className="widget-card widget-card--clock">
            <div className="widget-header">
              <div className="widget-icon">
                <FaClock />
              </div>
              <h2 className="widget-title">Hora Actual</h2>
            </div>
            <div className="widget-content">
              <div className="time-display">{time}</div>
              <div className="date-display">{dateLabel}</div>
            </div>
          </article>

          <article className="widget-card widget-card--exchange">
            <div className="widget-header">
              <div className="widget-icon">
                <FaDollarSign />
              </div>
              <h2 className="widget-title">Tipo de Cambio</h2>
            </div>
            <div className="widget-content">
              <div className="helper-text">1 USD =</div>
              <div className="exchange-rate">
                {exchangeRate !== null ? exchangeRate.toFixed(2) : '--'}
              </div>
              <div className="unit-text">MXN</div>
              <button type="button" onClick={updateExchange} className="refresh-btn">
                <FaSyncAlt />
                Actualizar
              </button>
            </div>
          </article>

          <article className="widget-card widget-card--progress">
            <div className="widget-header">
              <div className="widget-icon">
                <FaCalendarCheck />
              </div>
              <h2 className="widget-title">Progreso del Día</h2>
            </div>
            <div className="widget-content">
              <div className="day-percentage">{dayPercentage}%</div>
              <div className="progress-track">
                <div className="progress-bar" style={{ width: `${dayPercentage}%` }} />
              </div>
              <div className="helper-text">{timeRemaining}</div>
            </div>
          </article>

          <article className="widget-card widget-card--color">
            <div className="widget-header">
              <div className="widget-icon">
                <FaPalette />
              </div>
              <h2 className="widget-title">Color Aleatorio</h2>
            </div>
            <div className="widget-content">
              <div className="color-display" style={{ background: color }} />
              <div className="color-code">{color.toUpperCase()}</div>
              <button type="button" onClick={generateColor} className="refresh-btn">
                <FaRedo />
                Nuevo Color
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
