import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress, Container } from "@mui/material";
import loginBG from "../assets/loginBG.mp4";
import welcomeplayer from "../assets/welcomeplayer.jpg";
import { useState } from "react";

export default function SignInSide() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [SubmitLoading, setSubmitLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSubmitLoading(true);

    if (!validateForm()) {
      setSubmitLoading(false);
      return;
    }
  };

  const validateForm = () => {
    if (formData.email === undefined || formData.email === "") {
      setError("Email is Required");
      return false;
    } else if (formData.password === undefined || formData.password === "") {
      setError("Password is Required");
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);

    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const styles = (theme) => ({
      textField: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
      },
      input: {
        color: "white",
      },
    });
  };

  return (
    <>
      <div className="mainLogin">
        <div className="overlayLogin">
          <div className="videoLogin">
            <video src={loginBG} autoPlay loop muted />
          </div>
        </div>
      </div>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 10,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundImage: `url(${welcomeplayer})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    onClick={handleLogin}
                    disabled={SubmitLoading}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {SubmitLoading ? <CircularProgress /> : ""}
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item className="mx-auto">
                      <Link
                        href="/login"
                        variant="body2"
                        sx={{ display: "flex" }}
                      >
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
