import Link from 'next/link';
import HomeBackground from '../components/HomeBackground';
import styles from '../styles/HomePage.module.scss';
export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>VSCODE</h1>
          <h1>PORTFOLIO</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Son Pham</h1>
            <h6 className={styles.bio}>Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <HomeBackground className={styles.homeBackground} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
