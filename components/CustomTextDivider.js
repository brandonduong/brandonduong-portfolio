import { Divider, Grid, Typography } from "@mui/material";

export default function CustomTextDivider({ text }) {
  return (
    <Grid container>
      <Grid item xs={0.5} sm={2} md={3.5}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#000000",
            margin: "1rem 0",
          }}
        />
      </Grid>
      <Grid item xs={11} sm={8} md={5}>
        <Typography variant="h4">
          <strong>{text}</strong>
        </Typography>
      </Grid>
      <Grid item xs={0.5} sm={2} md={3.5}>
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
