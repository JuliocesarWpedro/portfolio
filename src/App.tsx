import styles from './App.module.scss';
import About from './Components/About/About';

const App = () => {
  return (
    <main className={styles.mainContainer}>
      <About />
    </main>
  );
};

export default App;
