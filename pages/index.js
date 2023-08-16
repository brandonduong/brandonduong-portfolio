import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import ListItems from "../components/ListItems";
import CustomTextDivider from "../components/CustomTextDivider";
import Project from "../components/Project";
import { groupProjectInfo } from "../constants/groupProjectInfo";
import { personalProjectInfo } from "../constants/personalProjectInfo";
import Projects from "../components/Projects";
export default function Home() {
  const demographicInfo = {
    "Full Name": "Brandon Duong",
    Birthday: "October 14",
    Personality:
      "Fast Learner, Team Player, Attention to Detail, Takes Initiative, Passionate",
    "Other Info":
      "Genuinely love to create and be creative, evident in the plethora of personal projects and learning endeavors I've completed!",
  };

  const skillsInfo = {
    "Programming Languages":
      "Python, Java, JavaScript, TypeScript, Kotlin, HTML5, CSS3, SQL, C#, C, R, Go",
    "Frameworks & Libraries":
      "AWS (Amplify, AppSync, Lambda, Cognito, API Gateway), GraphQL, Azure, React.js, Vue.js, Node.js, Express, Redux, Django, Bootstrap, Git/Github, Docker, JUnit, Pytest, Cypress",
    Databases: "Firebase, SQLite3, MySQL, Redis, MongoDB",
  };

  const linkButtonsInfo = {
    RESUME: {
      link: "Brandon_Duong_Resume.pdf",
      icon: <DescriptionIcon className={styles.buttonIcon} />,
    },
    GITHUB: {
      link: "https://github.com/brandonduong",
      icon: <GitHub className={styles.buttonIcon} />,
    },
    LINKEDIN: {
      link: "https://www.linkedin.com/in/branduong/",
      icon: <LinkedIn className={styles.buttonIcon} />,
    },
    EMAIL: {
      link: "mailto: brandon.duong@outlook.com",
      icon: <Email className={styles.buttonIcon} />,
    },
  };

  const linkButtons = (
    <>
      {Object.entries(linkButtonsInfo).map(([text, info]) => {
        return (
          <>
            <Grid item xs={6} sm={3} md={3}>
              <Button
                variant="contained"
                color="black"
                sx={{
                  fontSize: "0.95rem",
                  alignItems: "start",
                  borderRadius: "0.75rem",
                  width: "100%",
                }}
                href={info.link}
                target="_blank"
              >
                {info.icon}
                {text}
              </Button>
            </Grid>
          </>
        );
      })}
    </>
  );

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
      <Typography variant="h4" className={styles.title} gutterBottom>
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
        <p>Employee ID: 10114520 </p>
        <p>Position Title: Software Engineer / Developer</p>
        <p className={styles.classified}>
          <strong>CLASSIFIED</strong>
        </p>
      </Stack>
      <Grid container spacing={2}>
        <Grid item md={6} container>
          <Grid item xs={12}>
            <Typography variant="h6">IDENTIFICATION PHOTOGRAPH</Typography>

            <Divider
              sx={{
                borderBottomWidth: 3,
                borderColor: "#000000",
                marginBottom: "0.875rem",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <img alt="me" src="/me.jpg" className={styles.me} />
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">DEMOGRAPHIC INFORMATION</Typography>
          <Divider
            sx={{
              borderBottomWidth: 3,
              borderColor: "#000000",
              marginBottom: "0.875rem",
            }}
          />
          <Grid container textAlign={"start"} rowSpacing={1}>
            <ListItems infoObj={demographicInfo} />
          </Grid>
          <Divider
            sx={{
              borderBottomWidth: 1,
              borderStyle: "dashed",
              borderColor: "#000000",
              margin: "0.875rem 0",
            }}
          />
          <Grid container textAlign={"start"} rowSpacing={1}>
            <ListItems infoObj={skillsInfo} />
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderBottomWidth: 3,
          borderColor: "#000000",
          margin: "0.875rem 0",
        }}
      />
      <Grid container columnSpacing={0.25}>
        {linkButtons}
      </Grid>
      <CustomTextDivider text={"Personal Projects"} />
      <Projects projectInfo={personalProjectInfo} category="personal" />

      <CustomTextDivider text={"Group Projects"} />
      <Projects projectInfo={groupProjectInfo} category="group" />
    </Layout>
  );
}
