import { Container, ThemeProvider, createTheme } from "@mui/material";
import styles from "../styles/layout.module.css";
export default function Layout({ children }) {
  let theme = createTheme({
    typography: {
      fontFamily: `"Courier Prime", monospace`,
    },
  });

  theme = createTheme(theme, {
    palette: {
      black: theme.palette.augmentColor({
        color: {
          main: "#111111",
          dark: "#000000",
          contrastText: "#FFFFFF",
        },
        name: "black",
      }),
    },
  });

  return (
    <Container
      className={styles.container}
      sx={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <ThemeProvider theme={theme}>
        <div className={styles.main}>
          <div className={styles.inner}>{children}</div>
        </div>
      </ThemeProvider>

      <style jsx>{`
        main {
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
