import { Link } from 'react-router-dom';

export const CountryBtns = () => {
  return (
    <section id="countryBtn">
      <Link to="/" className="btn phils-btn">
        <h1 className="country-link">{`Kim <3`}</h1>
      </Link>
      {/* <Link to="/japan" className="btn japan-btn">
        <h1 className="country-link">Japan</h1>
      </Link> */}
      {/* <Link to="/her" className="btn her-btn">
        <h1 className="country-link">Kim</h1>
      </Link> */}
    </section>
  )
}
