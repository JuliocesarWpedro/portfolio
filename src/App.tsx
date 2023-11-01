import Header from './Components/Header/Header';
import styles from './main.module.scss';

const App = () => {
  return (
    <div className={styles.containerHome}>
      <Header />
      <div
        style={{ backgroundColor: 'rgb(23, 23, 23)', height: '100vh' }}
      ></div>
    </div>
  );
};

export default App;
