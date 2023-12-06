import styles from './App.module.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
