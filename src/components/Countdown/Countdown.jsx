import { useState, useEffect, useRef } from 'react';
import { CountryBtns } from './CountryBtns';

export const Countdown = ({date, country}) => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
  
    let interval = useRef();
  
    const countdownTimer = () => {
       const countdownDate = new Date(date).getTime()
  
       interval = setInterval(() => {
          const now = new Date().getTime()
          const distance = countdownDate - now;
          
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          if (distance < 0) {
             clearInterval(interval.current);
          } else {
             setTimerDays(days)
             setTimerHours(hours)
             setTimerMinutes(minutes)
             setTimerSeconds(seconds)
          }
       }, 1000);
    }
  
    useEffect(() => {
        countdownTimer()
       let currentInterval = interval.current
       
       return () => {
          clearInterval(currentInterval)
       }
    })
  
  return (
    <div className={'main-container ' + country}>
        <div className="countdown">
            <div className="time">
            <div className="days">
                <h1>{timerDays}</h1>
                <h2>Days</h2>
            </div>
            </div>

            <span>:</span>

            <div className="time">
            <div className="hours">
                <h1>{timerHours}</h1>
                <h2>Hours</h2>
            </div>
            </div>

            <span>:</span>

            <div className="time">
            <div className="minutes">
                <h1>{timerMinutes}</h1>
                <h2>Minutes</h2>
            </div>
            </div>

            <span>:</span>

            <div className="time">
            <div className="seconds">
                <h1>{timerSeconds}</h1>
                <h2>Seconds</h2>
            </div>
            </div>
        </div>
        <CountryBtns />
    </div>
  )
}

{/* <Link to="/" className="header-japan">
<h1>Philippines</h1>
</Link>
<Link to="/japan" className="header-phils">
<h1>Japan</h1>
</Link> */}