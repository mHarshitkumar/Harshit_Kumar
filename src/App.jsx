import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader'; // Import your Loader component

const App = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a delay (e.g., for data fetching)
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {loading ? (
        <Loader loading={loading} /> // Render the loader when loading
      ) : (
        // Render the main content when not loading
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
