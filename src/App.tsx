import styles from './App.module.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <main className={styles.mainContainer}>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
