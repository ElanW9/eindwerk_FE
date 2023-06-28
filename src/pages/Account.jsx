import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import useFetch from "../components/UseFetch";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../components/Footer";

const Account = () => {
  const { get, put } = useFetch();
  const [fighterInfo, setFighterInfo] = useState(null);
  const [martialArts, setMartialArts] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    get("fighters/3").then((data) => {
      console.log(data);
      setFighterInfo(data);
      if (data && data.images_id) {
        get(`images/${data.images_id}`).then((imageData) => {
          setImage(imageData);
        });
      }
    });
    get("martial_arts").then((data) => {
      console.log(data);
      setMartialArts(data);
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFighterInfo((prevFighterInfo) => ({
      ...prevFighterInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    put(`fighters/${fighterInfo.id}`, fighterInfo)
      .then((response) => {
        console.log("Fighter information updated successfully:", response);
      })
      .catch((error) => {
        console.error("Error updating fighter information:", error);
      });
  };

  return (
    <div>
      <Grid container spacing={2} marginBottom={10}>
        <Grid item xs={12} sm={6} textAlign="center">
          {image && <img src={image.url} alt="Fighter" className="accIMG" />}
          <h3 className="accName">Profile Image</h3>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="center" className="form">
          <h2>Account</h2>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={fighterInfo?.username || ""}
            className="textfield"
            onChange={handleChange}
            InputProps={{
              readOnly: false,
              style: { color: "black" },
            }}
            InputLabelProps={{
              style: { color: "#FF7300", fontSize: 25 },
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={fighterInfo?.age || ""}
            className="textfield"
            onChange={handleChange}
            InputProps={{
              readOnly: false,
              style: { color: "black" },
            }}
            InputLabelProps={{
              style: { color: "#FF7300", fontSize: 25 },
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Weight"
            name="weight"
            value={fighterInfo?.weight || ""}
            className="textfield"
            onChange={handleChange}
            InputProps={{
              readOnly: false,
              style: { color: "black" },
            }}
            InputLabelProps={{
              style: { color: "#FF7300", fontSize: 25 },
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Height"
            name="height"
            value={fighterInfo?.height || ""}
            className="textfield"
            onChange={handleChange}
            InputProps={{
              readOnly: false,
              style: { color: "black" },
            }}
            InputLabelProps={{
              style: { color: "#FF7300", fontSize: 25 },
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Experience"
            name="experience"
            value={fighterInfo?.experience || ""}
            className="textfield"
            onChange={handleChange}
            InputProps={{
              readOnly: false,
              style: { color: "black" },
            }}
            InputLabelProps={{
              style: { color: "#FF7300", fontSize: 25 },
            }}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Select
            fullWidth
            label="Martial Arts"
            name="martial_arts_id"
            value={fighterInfo?.martial_arts_id || ""}
            className="textfield"
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Select martial arts" }}
            sx={{ mb: 2 }}
          >
            <MenuItem value="" disabled>
              Select Martial Arts
            </MenuItem>
            {martialArts.map((martialArt) => (
              <MenuItem key={martialArt.id} value={martialArt.id}>
                {martialArt.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: "1rem", backgroundColor: "#FF7300" }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Account;
