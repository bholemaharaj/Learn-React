import './App.css';
import { Footer } from './Footer.js';
import Header from './Header.js';
import { MainContent } from './MainContent.js';


/**
 * App is the top-level component. It renders
 * the Header, MainContent, and Footer components.
 *
 * @returns {JSX.Element} The rendered component.
 */

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

