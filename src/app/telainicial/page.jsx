'use client'

import Head from 'next/head';
import Image from 'next/image';
import styles from '../telainicial/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Academia Corpus Quality</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Academia Corpus Quality
        </h1>

        <p className={styles.description}>
          Seja bem-vindo à Academia Corpus Quality!
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Sobre nós</h2>
            <p>A Academia Corpus Quality é o lugar ideal para quem busca saúde e qualidade de vida. Nossas instalações modernas e equipamentos de última geração garantem uma experiência única para nossos clientes.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Nossos serviços</h2>
            <p>Aqui você encontra uma variedade de serviços para atender às suas necessidades. De aulas de ginástica a treinamento personalizado, temos tudo o que você precisa para alcançar seus objetivos de fitness.</p>
          </a>
        </div>

        <div className={styles.gallery}>
          <Image src="/images/gallery1.jpg" alt="Galeria 1" width={500} height={300} />
          <Image src="/images/gallery2.jpg" alt="Galeria 2" width={500} height={300} />
          <Image src="/images/gallery3.jpg" alt="Galeria 3" width={500} height={300} />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Construído com{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  );
}