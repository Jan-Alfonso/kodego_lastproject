import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import valheim from "../assets/Valheim_logo.png";
import dota from "../assets/dota.png";
import diabloI from "../assets/diabloI.png";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export default function MediaControlCard() {
  const cardStyle = {
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundSize: "200%",
    flexDirection: "row",
    width: 300,
    height: 100,
    boxShadow: "0 0 2px #ff9100",
    transition: "0.6s",
    "&:hover": {
      boxShadow: "0 0 40px #83eeff",
      cursor: "pointer",
    },
  };

  const gridItemStyle = {
    width: 300,
    height: 100,
    boxShadow: "0 0 2px #ff9100",
    transition: "0.6s",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "space-between",
  };

  const cardMediaStyle = {
    width: 125,
    objectFit: "contain",
    margin: 1,
    justifyContent: "space-between",
  };

  const typographyStyle = {
    fontSize: 20,
    color: "white",
    fontFamily: "tektur",
  };

  const subtitleStyle = {
    color: "#83eeff",
    fontFamily: "tektur",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: 1000,
        height: 100,
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="https://store.steampowered.com/app/892970/Valheim/">
            <Card className="card" sx={cardStyle} flexDirection="row">
              <CardMedia
                component="img"
                sx={cardMediaStyle}
                image={dota}
                alt="dota"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                className="mx-auto my-auto"
              >
                <CardContent
                  sx={{ margin: 1, p: 0, "&:last-child": { pb: 0 } }}
                >
                  <Typography component="div" variant="h5" sx={typographyStyle}>
                    Play Dota 2
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={subtitleStyle}
                  >
                    -Steam
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="https://store.steampowered.com/app/892970/Valheim/">
            <Card className="card" sx={cardStyle} flexDirection="row">
              <CardMedia
                component="img"
                sx={cardMediaStyle}
                image={valheim}
                alt="valheim"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                className="mx-auto my-auto"
              >
                <CardContent
                  sx={{ margin: 1, p: 0, "&:last-child": { pb: 0 } }}
                >
                  <Typography component="div" variant="h5" sx={typographyStyle}>
                    Play Valheim
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={subtitleStyle}
                  >
                    -Steam
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Link to="https://diabloimmortal.blizzard.com/en-us/">
            <Card className="card" sx={cardStyle} flexDirection="row">
              <CardMedia
                component="img"
                sx={cardMediaStyle}
                image={diabloI}
                alt="DiabloI"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                className="mx-auto my-auto"
              >
                <CardContent
                  sx={{ margin: 1, p: 0, "&:last-child": { pb: 0 } }}
                >
                  <Typography component="div" variant="h5" sx={typographyStyle}>
                    Play Diablo Immortal
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={subtitleStyle}
                  >
                    -Mobile
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
