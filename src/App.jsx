import './css/index.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Countdown } from './components';

const Phils = () => {
  return (
      <Countdown date='December 21, 2024 06:00:00' country='phils-container' />
  )
}

const Japan = () => {
  return (
      <Countdown date='December 26, 2024 06:00:00' country='japan-container' />
  )
}

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
        <Route path="/" element={<Phils />}></Route>
        <Route path="/japan" element={<Japan />}></Route>
        {/* <Route path="/her" element={<Her />}></Route> */}
      </Routes>
  </section>
  )
}