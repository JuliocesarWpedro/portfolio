import styles from './App.module.scss';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

const App = () => {
  return (
    <main className={styles.mainContainer}>
      <About />
      <Projects />
    </main>
  );
};

export default App;
