import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from './page.module.css';

export default function Home() {
  // const [text, setText] = useState('');

  // const handelSubmit = async () => {
  //   const response = await fetch('/api/translate', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       text,
  //       modelId: 'en-es',
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log('response', response);
  // };

  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  );
}
