import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TranslationBox from '@/components/TranslationBox';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <TranslationBox />
      <Footer />
    </main>
  );
}
