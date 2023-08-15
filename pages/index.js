import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { Divider, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
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
          <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">DEMOGRAPHIC INFORMATION</Typography>
          <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
        </Grid>
      </Grid>
    </Layout>
  );
}
