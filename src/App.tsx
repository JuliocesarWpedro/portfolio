import styles from './App.module.scss';
import ParticlesContainer from './Components/ParticlesContainer/ParticlesContainer';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <ParticlesContainer />
    </div>
  );
};

export default App;
