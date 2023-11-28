import styles from './App.module.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <main className={styles.mainContainer}>
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
