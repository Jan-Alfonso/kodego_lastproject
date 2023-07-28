import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Alert, CircularProgress, Container, Modal } from "@mui/material";
import loginBG from "../assets/loginBG.mp4";
import welcomeplayer from "../assets/welcomeplayer.jpg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  pt: 5,
  px: 5,
  pb: 3,
};

export default function SignInSide() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [regError, setRegError] = useState("");
  const [SubmitLoading, setSubmitLoading] = useState(false);
  const [regSubmitLoading, setRegSubmitLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setSubmitLoading(true);

    if (!validateForm()) {
      setSubmitLoading(false);
      return;
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/login",
          formData
        );
        const token = response.data.token;
        localStorage.setItem("login_token", token);
        navigate("/");
      } catch (error) {
        let errorMessage = error.response.data.error;
        setError(errorMessage);
        console.log(error.response.data.error);
      }
      setSubmitLoading(false);
    }
  };
  const validateForm = () => {
    if (formData.email === "" && formData.password === "") {
      setError("Email and Password is Required");
      return false;
    } else if (formData.password === undefined || formData.password === "") {
      setError("Password is Required");
      return false;
    } else if (formData.email === undefined || formData.email === "") {
      setError("Email is Required");
      return false;
    }

    return true;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setRegError("");
    setRegSubmitLoading(true);

    if (!validateRegForm()) {
      setRegSubmitLoading(false);
      return;
    } else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          regData
        );
        const token = response.data.token;
        localStorage.setItem("login_token", token);
        navigate("/");
      } catch (regError) {
        let errorMessage = regError.response.data.regError;
        setRegError(errorMessage);
        console.log(regError.response.data.regError);
      }
      setRegSubmitLoading(false);
    }
  };

  const validateRegForm = () => {
    if (
      regData.email === "" &&
      regData.password === "" &&
      regData.name === ""
    ) {
      setRegError("Please complete the required text field");
      return false;
    } else if (regData.password === undefined || regData.password === "") {
      setRegError("Password is Required");
      return false;
    } else if (regData.email === undefined || regData.email === "") {
      setRegError("Email is Required");
      return false;
    } else if (regData.name === undefined || regData.name === "") {
      setRegError("Name is Required");
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

  const handleRegChange = (event) => {
    console.log(event.target.name, event.target.value);

    setRegData((prevState) => ({
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

  const handleRegSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
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
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  {error && <Alert severity="error">{error}</Alert>}
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
                  <Button
                    type="submit"
                    onClick={handleLogin}
                    disabled={SubmitLoading}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {SubmitLoading ? (
                      <CircularProgress size={"50px"} sx={{ color: "white" }} />
                    ) : (
                      ""
                    )}
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item className="mx-auto">
                      <Button onClick={handleOpen}>
                        Don't have an account? Sign Up
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                      >
                        <Box
                          sx={{ ...modalStyle, width: 400 }}
                          onSubmit={handleRegSubmit}
                        >
                          <h2 id="parent-modal-title" className="text-center">
                            Sign Up
                          </h2>

                          {regError && (
                            <Alert severity="error">{regError}</Alert>
                          )}
                          <TextField
                            sx={{ my: 1, width: "100%" }}
                            name="name"
                            required
                            id="outlined-required"
                            label="Name"
                            value={regData.name}
                            onChange={handleRegChange}
                          />
                          <TextField
                            sx={{ my: 1, width: "100%" }}
                            name="email"
                            required
                            id="outlined-required"
                            label="Email"
                            value={regData.email}
                            onChange={handleRegChange}
                          />
                          <TextField
                            sx={{ my: 1, width: "100%" }}
                            name="password"
                            required
                            id="outlined-required"
                            label="Password"
                            type="password"
                            value={regData.password}
                            onChange={handleRegChange}
                          />
                          <Button
                            onClick={handleRegister}
                            fullWidth
                            variant="contained"
                            sx={{
                              display: "flex",
                              marginTop: 4,
                              marginBottom: 4,
                            }}
                          >
                            {regSubmitLoading ? (
                              <CircularProgress
                                size={"50px"}
                                sx={{ color: "white" }}
                              />
                            ) : (
                              ""
                            )}
                            {"Submit"}
                          </Button>
                        </Box>
                      </Modal>
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
