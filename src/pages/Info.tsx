import { Grid } from "@mui/material";

const Main = () => {
  console.log("home: /");
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          aaa
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={9}>
            bbb
          </Grid>
          <Grid item xs={9}>
            bbb
          </Grid>
          <Grid item xs={9}>
            bbb
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
