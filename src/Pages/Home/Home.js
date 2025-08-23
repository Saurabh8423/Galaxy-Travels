import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import "../Home/Components/HomeStyles.css";
import About from './Components/About';
import CallToAction from './Components/CallToAction';
import Services from './Components/Services';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CallToAction />
    </>
  );
};

export default Home;

