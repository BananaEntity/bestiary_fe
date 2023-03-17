import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

import SearchList from "../components/SearchList";

function Home() {
  const [data, setData] = useState({ name: "" });
  console.log("home: /");
  const searchBeast = (data: string) => {
    fetch("https://hayat.fun/hello")
      .then((res) => res.json())
      .then((result) => {
        setData({
          name: result.items,
        });
      });
  };
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Beast Name"
            variant="standard"
            value={data.name}
            onChange={(e) => setData({ name: e.target.value })}
          />
          <div>
            <Button variant="contained" onClick={() => searchBeast(data.name)}>
              Click Parent
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <SearchList data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
