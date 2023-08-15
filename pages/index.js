import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brandon Duong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </div>

      <style jsx>{`
        main {
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif, "Courier Prime", monospace;
          line-height: 1;
          min-height: 100vh;
          min-width: 320px;
          overflow-x: hidden;
          word-wrap: break-word;
          background-color: #fafafa;
        }

        html {
          font-size: 83.333333%;
        }
      `}</style>
    </div>
  );
}
