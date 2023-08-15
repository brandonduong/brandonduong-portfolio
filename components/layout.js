import { Container, ThemeProvider, createTheme } from "@mui/material";
import styles from "../styles/layout.module.css";
export default function Layout({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: `"Courier Prime", monospace`,
    },
  });

  return (
    <Container className={styles.container}>
      <ThemeProvider theme={theme}>
        <div className={styles.main}>
          <div className={styles.inner}>{children}</div>
        </div>
      </ThemeProvider>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          font-family: "Courier Prime", monospace;
        }
      `}</style>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap");

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
    </Container>
  );
}