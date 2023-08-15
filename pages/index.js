import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { Divider, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const demographicInfo = {
    "Full Name": "Brandon Duong",
    Birthday: "October 14",
    Personality:
      "Fast Learner, Team Player, Attention to Detail, Takes Initiative",
    "Other Info":
      "Genuinely love to create and be creative, evident in the plethora of personal projects and learning endeavors I've completed!",
  };

  const skillsInfo = {
    "Programming Languages":
      "Python, Java, JavaScript, TypeScript, Kotlin, HTML5, CSS3, SQL, C#, C, R, Go",
    "Frameworks and Libraries":
      "AWS (Amplify, AppSync, Lambda, Cognito, API Gateway), GraphQL, Azure, React.js, Vue.js, Node.js, Express, Redux, Django, Bootstrap, Git/Github, Docker, JUnit, Pytest, Cypress",
    Databases: "Firebase, SQLite3, MySQL, Redis, MongoDB",
  };

  function listItems(infoObj) {
    return Object.entries(infoObj).map(([row, info]) => {
      return (
        <>
          <Grid item md={4}>
            <Typography variant="p" className={styles.demograpicInfo}>
              <strong>{row}</strong>
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Typography variant="p" className={styles.demograpicInfo}>
              {info}
            </Typography>
          </Grid>
        </>
      );
    });
  }

  return (
    <Layout>
      <Head>
        <title>Brandon Duong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        className={`${styles.header}`}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <p>BEST VIEWED ON BROWSER</p>
        <p>
          <strong>UPDATED:</strong> 08/15/2023
        </p>
      </Stack>
      <Typography variant="h2" className={styles.title} gutterBottom>
        Employee Profile
      </Typography>
      <Typography variant="p" className={styles.name}>
        Brandon Duong
      </Typography>
      <Stack
        className={`${styles.position}`}
        direction={"row"}
        justifyContent={"space-around"}
      >
        <p>Employee ID: 511920518</p>
        <p>Position Title: Software Engineer / Developer</p>
        <p className={styles.classified}>
          <strong>CLASSIFIED</strong>
        </p>
      </Stack>

      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography variant="h6">IDENTIFICATION PHOTOGRAPH</Typography>
          <Divider
            sx={{
              borderBottomWidth: 3,
              borderColor: "black",
              marginBottom: "1.75rem",
            }}
          />
          <img alt="me" src="/me.jpg" className={styles.me} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">DEMOGRAPHIC INFORMATION</Typography>
          <Divider
            sx={{
              borderBottomWidth: 3,
              borderColor: "black",
              marginBottom: "1.75rem",
            }}
          />
          <Grid container textAlign={"start"} rowSpacing={1}>
            {listItems(demographicInfo)}
          </Grid>
          <Divider
            sx={{
              borderBottomWidth: 1,
              borderStyle: "dashed",
              borderColor: "black",
              margin: "0.875rem 0",
            }}
          />
          <Grid container textAlign={"start"} rowSpacing={1}>
            {listItems(skillsInfo)}
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderBottomWidth: 3,
          borderColor: "black",
          margin: "0.875rem",
        }}
      />
    </Layout>
  );
}
