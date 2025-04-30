import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust duration to match your needs
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <NavBar />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
