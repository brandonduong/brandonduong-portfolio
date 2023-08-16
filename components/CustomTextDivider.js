import { Divider, Grid, Typography } from "@mui/material";

export default function CustomTextDivider({ text }) {
  return (
    <Grid container>
      <Grid item xs={3} sm={4.5}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#000000",
            margin: "0.75rem 0",
          }}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="h6">{text}</Typography>
      </Grid>
      <Grid item xs={3} sm={4.5}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: "#000000",
            margin: "0.75rem 0",
          }}
        />
      </Grid>
    </Grid>
  );
}
