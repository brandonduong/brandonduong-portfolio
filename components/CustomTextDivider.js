import { Divider, Grid, Typography } from "@mui/material";

export default function CustomTextDivider({ text }) {
  return (
    <Grid container>
      <Grid item xs={3} sm={3.75}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#000000",
            margin: "1rem 0",
          }}
        />
      </Grid>
      <Grid item xs={6} sm={4.5}>
        <Typography variant="h4">
          <strong>{text}</strong>
        </Typography>
      </Grid>
      <Grid item xs={3} sm={3.75}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#000000",
            margin: "1rem 0",
          }}
        />
      </Grid>
    </Grid>
  );
}
