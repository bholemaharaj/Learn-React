import logo from './logo.svg';

/**
 * Returns an <header> element that contains a <nav> element
 * with a logo and a list of links to common pages.
 *
 * @returns {JSX.Element} The rendered component.
 */
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={ logo } alt="React logo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header