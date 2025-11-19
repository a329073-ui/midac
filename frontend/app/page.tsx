'use client';

import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>MIDAC A.C Modelo integral de desarrollo comunitario</h1>
        <p style={styles.subtitle}>
          Interfaz de usuario para MIDAC — accede a tus herramientas y datos desde aquí.
        </p>
      </header>

      <section style={styles.misionVision}>
        <article style={styles.card}>
          <h2>1.- MISIÓN</h2>
          <p>
            Ser una organización que contribuye al desarrollo integral de las comunidades de la región
            centro sur del estado de Chihuahua.
          </p>
        </article>

        <article style={styles.card}>
          <h2>2.- VISIÓN</h2>
          <p>
            Apoyar a las comunidades a través de programas innovadores que formen vecinos propositivos,
            proactivos y responsables.
          </p>
        </article>
      </section>

      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/about" style={styles.link}>
              Acerca de
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/login" style={styles.link}>
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </nav>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} MIDAC A.C</small>
      </footer>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily:
      'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    color: '#111827',
    maxWidth: 1000,
    margin: '0 auto',
  },
  header: { marginBottom: '1.5rem' },
  title: { fontSize: '1.75rem', margin: 0 },
  subtitle: { marginTop: '0.5rem', color: '#6b7280' },
  nav: { margin: '1rem 0' },
  ul: { display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 },
  li: {},
  link: { color: '#2563eb', textDecoration: 'none' },
  misionVision: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  card: { padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff' },
  footer: { marginTop: '2rem', color: '#6b7280' },
};'use client';

import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>MIDAC A.C Modelo integral de desarrollo comunitario</h1>
        <p style={styles.subtitle}>
          Interfaz de usuario para Midac — accede a tus herramientas y datos desde aquí.
        </p>
      </header>

      <section style={styles.misionVision}>
        <article style={styles.card}>
          <h2>1.- MISIÓN</h2>
          <p>
            Ser una organización que contribuye al desarrollo integral de las comunidades de la región
            centro sur del estado de Chihuahua.
          </p>
        </article>

        <article style={styles.card}>
          <h2>2.- VISIÓN</h2>
          <p>
            Apoyar a las comunidades a través de programas innovadores que formen vecinos propositivos,
            proactivos y responsables.
          </p>
        </article>
      </section>

      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/about" style={styles.link}>
              Acerca de
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/login" style={styles.link}>
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </nav>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} MIDAC A.C</small>
      </footer>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily:
      'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    color: '#111827',
    maxWidth: 1000,
    margin: '0 auto',
  },
  header: { marginBottom: '1.5rem' },
  title: { fontSize: '1.75rem', margin: 0 },
  subtitle: { marginTop: '0.5rem', color: '#6b7280' },
  nav: { margin: '1rem 0' },
  ul: { display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 },
  li: {},
  link: { color: '#2563eb', textDecoration: 'none' },
  misionVision: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  card: { padding: '1rem', border: '1px solid #e5e7eb', borderRadius: 8, background: '#fff' },
  footer: { marginTop: '2rem', color: '#6b7280' },
};import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
