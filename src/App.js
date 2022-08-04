import Logo from './components/Logo'
import ScrollTop from './components/Btn/ScrollTop'
import Header from './components/Header'
import NavbarResponsive from './components/NavbarResponsive'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Shapes from './components/Shapes';

function App() {
  return (
    <div className="relative overflow-hidden">
      <NavbarResponsive />
      <ScrollTop />
      <Shapes />
      <Navbar />
      <Logo />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
