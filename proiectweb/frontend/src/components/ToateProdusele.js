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
import { Autocomplete, TextField } from "@mui/material";
import ModalExpirare from "./ModalExpirare";

export default function ToateProdusele() {
  const [alimente, setAlimente] = React.useState([]);
  const [alimenteSelectate, setAlimenteSelectate] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState("Toate");
  const [open, setOpen] = React.useState(false);
  const [alimenteExpirate, setAlimenteExpirate] = React.useState([]);

  React.useEffect(() => {
    if (!localStorage.getItem("token")) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/alimente/alimenteDisponibile`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const userRes = await axios.get("/api/utilizatori", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const categoriiRes = await axios.get("/api/categorii/all", {
          headers: { Authorization: localStorage.getItem("token") },
        });

        const alimenteFinal = res.data.filter(
          (a) => a.id_utilizator !== userRes.data.id
        );

        setAlimente(alimenteFinal);
        setAlimenteSelectate(alimenteFinal);
        setCategories([{ id: -1, nume: "Toate" }, ...categoriiRes.data]);

        // logica modal
        const azi = new Date();
        const alimenteleMele = res.data.filter(
          (a) => a.id_utilizator === userRes.data.id
        );
        console.log(alimenteleMele);
        const expirate = alimenteleMele.filter(
          (a) =>
            new Date(a.dataExpirare).getTime() - azi.getTime() <=
            1000 * 60 * 60 * 24 * 2
        );
        console.log(expirate);
        setAlimenteExpirate(expirate);
        setOpen(expirate.length > 0);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    const allAlimente = [...alimente];

    if (categoryName === "Toate") setAlimenteSelectate(allAlimente);

    if (categoryName !== "Toate") {
      const categorie = categories.filter((c) => c.nume === categoryName)[0];

      const alimentePeCategorie = allAlimente.filter(
        (a) => a.id_categorie === categorie.id
      );
      setAlimenteSelectate(alimentePeCategorie);
    }
  }, [categoryName, alimente, categories]);

  const formatDate = (date) => {
    date = new Date(date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handle = async (id) => {
    const res = await axios.put(
      `/api/alimente/rezerva/${id}`,
      {},
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );

    if (res.status !== 200) return alert("Eroare la rezervare");
    const alimenteRamase = alimente.filter((a) => a.id !== id);
    setAlimente(alimenteRamase);
    setAlimenteSelectate(alimenteRamase);
    setCategoryName("Toate");
  };

  return (
    <>
      <Appbar />
      {alimenteExpirate.length > 0 && (
        <ModalExpirare
          open={open}
          setOpen={setOpen}
          alimente={alimenteExpirate}
          formatDate={formatDate}
        />
      )}
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
              Toate alimentele disponibile
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Aici poti vedea alimentele care nu au trecut de data de expirare
              si care inca sunt disponibile
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {categories && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Autocomplete
                  sx={{ width: 200 }}
                  disableClearable
                  value={categoryName}
                  onChange={(event, newValue) => {
                    setCategoryName(newValue);
                  }}
                  options={categories.map((c) => c.nume)}
                  renderInput={(params) => (
                    <TextField {...params} label="Categories" />
                  )}
                />
              </Grid>
            )}
            {alimenteSelectate.map((aliment) => {
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
                      {formatDate(aliment.dataExpirare)}
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        onClick={() => handle(aliment.id)}
                      >
                        Rezerva
                      </Button>
                    </CardActions>
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
