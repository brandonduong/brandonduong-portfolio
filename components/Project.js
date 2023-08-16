import { Button, Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import CustomCarousel from "./CustomCarousel";
import { useState } from "react";
export default function Project({ project, info }) {
  const [slide, setSlide] = useState(0);

  return (
    <Grid container columnSpacing={3} alignItems={"center"}>
      <Grid item sm={6} md={4}>
        <CustomCarousel
          project={project}
          info={info}
          slide={slide}
          setSlide={setSlide}
        />
      </Grid>
      <Grid item sm={6} md={8} textAlign={"start"}>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={8}>
            <Typography variant="h5">
              <strong>
                {info.title} {info.subtitle && <>- {info.subtitle}</>}
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" textAlign={"end"}>
              <strong>{info.year}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {info.descriptionTitles.map((dtitle, index) => (
              <div
                class={styles.fade}
                style={{ display: slide === index ? "" : "none" }}
              >
                <Typography
                  variant="h5"
                  className={styles.listInfo}
                  style={{ textDecoration: "underline" }}
                >
                  {dtitle}
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid item xs={12}>
            {info.description.map((desc, index) => (
              <div
                class={styles.fade}
                style={{ display: slide === index ? "" : "none" }}
              >
                <Typography variant="h6" className={styles.listInfo}>
                  {desc} ({index + 1}/{info.description.length})
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" className={styles.listInfo}>
              <strong>Technology Stack</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h6" className={styles.listInfo}>
              {info.tech}
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
