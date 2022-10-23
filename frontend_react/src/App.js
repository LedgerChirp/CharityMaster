import "./App.css";
import Contact from './components/contact/Contact'
import HomeHero from "./components/HomeHero";
import Navbar from "./components/Navbar";
import Footer from "./components/contact/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
