import { Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";

export default function ListItems({ infoObj }) {
  return Object.entries(infoObj).map(([row, info]) => {
    return (
      <Fragment key={row}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="p" className={styles.listInfo}>
            <strong>{row}</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="p" className={styles.listInfo}>
            {info}
          </Typography>
        </Grid>
      </Fragment>
    );
  });
}
