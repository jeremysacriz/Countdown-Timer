import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <section id="header">
        <div className="header-container">
            <div className="header-logo">
              <Link to='/'>
                <img src="public\img\PHILS19.jpg" alt="phils24-img" className="header-logo-img" />
              </Link>
            </div>
        </div>
    </section>
  )
}
