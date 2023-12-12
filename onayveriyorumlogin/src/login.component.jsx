import { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./assets/css/login.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";

const ContainerTheme = styled(Container)({
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  padding: "5rem 1rem 5rem 1rem",
  borderRadius: "5px",
  "@media (min-width:576px)": {
    padding: "5rem",
    margin: "1rem",
  },
});

const theme = createTheme();

const LoginForm = ({onLogin}) => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [loggedIn,setLoggedIn] = useState(false);
  const [error,setError] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showpassword);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin"){
      setLoggedIn(true);
      setError(false);
      onLogin();
    }else {
      setError(true);
    }
  };

  if (loggedIn){
    return <Navigate to="/dashboard" />
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <ContainerTheme sx={{ margin: "1rem" }} maxWidth="sm">
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: 200,
              marginLeft: "1rem",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
            variant="h4"
            align="left"
            gutterBottom
          >
            HOŞGELDİNİZ
          </Typography>
          <Typography
            variant="h6"
            align="left"
            sx={{
              fontFamily: "Nunito",
              color: "#1976d2",
              marginLeft: "1rem",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
            gutterBottom
          >
            GİRİŞ
          </Typography>
          <form onSubmit={submitForm}>
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
              error={error}
            />
            <TextField
              label="Şifre"
              variant="outlined"
              type={showpassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        color: showpassword ? "primary.main" : "action.active",
                      }}
                      onClick={handlePasswordToggle}
                      edge="end"
                    >
                      {showpassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={error}
            />

              {error && (
                <Typography sx={{fontSize:".8rem" ,color: "red", marginTop: "0.5rem" }}>
                Kullanıcı adı veya veya şifre hatalı.
                </Typography>
              )}

            <Stack
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.4rem",
              }}
              spacing={1}
              direction={{ xs: "column", sm: "row" }}
            >
              <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                Şifrenizimi Unuttunuz ?
              </Link>
              <Button
                type="submit"
                sx={{ borderRadius: "50px", textTransform: "capitalize" }}
                variant="contained"
                color="primary"
                align="right"
              >
                Giriş Yap
              </Button>
            </Stack>
          </form>
        </ContainerTheme>
      </ThemeProvider>
    </div>
  );
};

export default LoginForm;
