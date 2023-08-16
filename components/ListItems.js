import { Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function ListItems({ infoObj }) {
  return Object.entries(infoObj).map(([row, info]) => {
    return (
      <>
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
      </>
    );
  });
}
