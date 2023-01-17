import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Appbar from "./Appbar";
import axios from "axios";

export default function ProduseRezervate() {
  const [alimente, setAlimente] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/alimente/allAlimente`, {
          headers: { Authorization: localStorage.getItem("token") },
        });

        const userRes = await axios.get("/api/utilizatori", {
          headers: { Authorization: localStorage.getItem("token") },
        });

        const alimenteRezervate = res.data.filter(
          (a) => a.claimedBy === userRes.data.id
        );
        setAlimente(alimenteRezervate);
      } catch (e) {
        const err = e.response;
        if (err.status === 500) {
          alert("A aparut o eroare");
        }
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    date = new Date(date);
    console.log(date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <>
      <Appbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Toate alimentele rezervate de tine
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {alimente.map((aliment) => {
              return (
                <Grid item key={aliment.id} xs={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h4">
                        {aliment.nume}
                      </Typography>
                      {console.log(aliment.dataExpirare)}
                      {formatDate(aliment.dataExpirare)}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </>
  );
}
