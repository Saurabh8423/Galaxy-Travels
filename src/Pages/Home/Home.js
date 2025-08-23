import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import "../Home/Components/HomeStyles.css";
import About from './Components/About';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;

