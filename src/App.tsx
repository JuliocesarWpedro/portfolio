import styles from './App.module.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import ParticlesContainer from './Components/ParticlesContainer/ParticlesContainer';

const App = () => {
  return (
    <>
      <ParticlesContainer />
      <Header />
      <main className={styles.mainContainer}>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
