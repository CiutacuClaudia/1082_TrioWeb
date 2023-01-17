import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Appbar from "./Appbar";
import axios from "axios";

export default function Profil() {
  const [alimente, setAlimente] = React.useState([]);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/alimente/allAlimente`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const userRes = await axios.get("/api/utilizatori", {
          headers: { Authorization: localStorage.getItem("token") },
        });

        setUser(userRes.data);

        const alimenteleMele = res.data.filter(
          (a) => a.id_utilizator === userRes.data.id
        );
        setAlimente(alimenteleMele);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const formatDate = (date) => {
    date = new Date(date);
    console.log(date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handle = async (id) => {
    const res = await axios.delete(`/api/alimente/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });

    if (res.status !== 200) return alert("Eroare la rezervare");
    const alimenteRamase = alimente.filter((a) => a.id !== id);
    setAlimente(alimenteRamase);
  };

  return (
    <>
      <Appbar />
      {user && (
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
                Salut, {user.nume}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Aici poti vedea toate alimentele oferite de tine si poti sterge
                alimentele nerezervate pe care vrei sa le pastrezi
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
                      {aliment.disponibil && (
                        <CardActions>
                          <Button
                            variant="contained"
                            onClick={() => handle(aliment.id)}
                          >
                            Sterge
                          </Button>
                        </CardActions>
                      )}
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
}
