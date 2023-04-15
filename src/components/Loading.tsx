import styles from '../styles/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.typing}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Loading;
