import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Appbar from "./Appbar";
import { useNavigate } from "react-router-dom";

export default function AddProdus() {
  const [date, setDate] = useState(new Date());
  const [nume, setNume] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/categorii/all", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setCategories(res.data);
        if (res.data.length > 0) setCategoryName(res.data[0].nume);
      } catch (e) {
        const err = e.response;
        console.log(err);
        alert("error");
      }
    };
    fetchCategories();
  }, []);

  const handler = async () => {
    const id_categorie = categories.filter((c) => c.nume === categoryName)[0]
      .id;
    const data = {
      nume,
      dataExpirare: date,
      disponibil: true,
      id_categorie,
      claimedBy: null,
    };

    const res = await axios.post("/api/alimente/add", data, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status !== 201) return alert("Eroare la adaugare");
    navigate("/");
  };

  return (
    <>
      <Appbar />
      <Box
        sx={{
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          //   mt: "-30px",
        }}
      >
        <Paper
          sx={{
            pt: 8,
            pb: 6,
            m: 5,
          }}
          elevation={3}
        >
          <Grid
            container
            flexDirection={"column"}
            justifyContent="flex-start"
            alignItems={"center"}
            spacing={3}
            width="100%"
            minWidth="40vw"
          >
            <Grid item xs={12}>
              <Typography
                variant="h3"
                textAlign={"center"}
                color="text.primary"
              >
                Add product
              </Typography>
            </Grid>

            {
              <>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 250 }}
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ width: 250 }}
                    type="date"
                    value={date.toISOString().split("T")[0]}
                    onChange={(e) => {
                      const v = e.target.value;
                      setDate(v ? new Date(e.target.value) : new Date());
                    }}
                    label="Data expirare"
                  />
                </Grid>

                {categoryName?.length >= 0 && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", alignItems: "center" }}
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
              </>
            }
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handler}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
