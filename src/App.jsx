import './css/index.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Countdown } from './components';

const Aus = () => {
  return (
      <Countdown date='April 13, 2025 10:30:00' country='aus-container' />
  )
}

// const Japan = () => {
//   return (
//       <Countdown date='August 30, 2026 6:00:00' country='japan-container' />
//   )
// }

// const Her = () => {
//   return (
//       <Countdown date='December 6, 2024 06:00:00' country='her-container' />
//   )
// }

export const App = () => {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Aus />}></Route>
        {/* <Route path="/japan" element={<Japan />}></Route> */}
        {/* <Route path="/her" element={<Her />}></Route> */}
      </Routes>
  </section>
  )
}