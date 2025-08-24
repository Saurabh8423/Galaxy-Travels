import Home from './Pages/Home/Home.js';
import Contact from './Pages/Contact/Contact.js';
import Training from './Pages/Training/Training.js';
import Pricing from './Pages/Pricing/Pricing.js';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';
function App() {
  return (
    <div className='app'>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/training' element={<Training />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
