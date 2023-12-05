import { Stack, Typography } from "@mui/material";
import CustomTextDivider from "../components/CustomTextDivider";
import Projects from "../components/Projects";
import Layout from "../components/layout";
import { groupProjectInfo } from "../constants/groupProjectInfo";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Group() {
  return (
    <Layout>
      <Stack
        className={`${styles.header}`}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <p>BEST VIEWED ON BROWSER</p>

        <Stack textAlign={"end"} rowGap={1}>
          <p style={{ marginBottom: 0 }}>
            <strong>UPDATED:</strong> 12/05/2023
          </p>
          <Typography variant="p" className={`${styles.header}`}>
            <Link href="/" style={{ color: "black" }}>
              <strong>HOME PAGE</strong>
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <CustomTextDivider text={"Group Projects"} />
      <Projects projectInfo={groupProjectInfo} category="group" />
    </Layout>
  );
}
