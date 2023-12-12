import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import "./assets/css/fonts.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function UserOrAdmin() {
  const [firstButtonSelected, setFirstButtonSelected] = useState(false);
  const [secondButtonSelected, setSecondButtonSelected] = useState(false);

  const handleFirstButtonClick = () => {
    setFirstButtonSelected(true);
    setSecondButtonSelected(false);
  };

  const handleSecondButton = () => {
    setFirstButtonSelected(false);
    setSecondButtonSelected(true);
  };

  const navigate = useNavigate();
  const pageNavigator = () => {
    if (firstButtonSelected == true && secondButtonSelected == false) {
      navigate("/user");
    } else if (secondButtonSelected == true && firstButtonSelected == false) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <main>
      {/* <Box>
            <Typography sx={{fontFamily:"Nunito",textAlign:"center",backgroundColor:"#1976d2",paddingY:"1rem",fontSize:"2rem"}}>
                VERİONAY
            </Typography>
        </Box> */}

      {/* Üstekki Örnek Başlık Eklenebilirde Eklenmiyebilirde */}

      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
        flexDirection={{xs:"column",md:"row"}}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            alignItems: "center",

          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
            }}
          >
            <h3 style={{ fontFamily: "Nunito", opacity: ".7" }}>Kullanıcı</h3>
            <Button
              onClick={handleFirstButtonClick}
              sx={{
                width: "100%",
                paddingY: "4.5rem",
                paddingX: ".6rem",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                "&:focus": {
                  backgroundColor: "#1976d2",
                  "& .MuiTypography-root": {
                    color: "whitesmoke",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                },
              }}
              variant="outlined"
              color="primary"
            >
              <Typography
                style={{ fontFamily: "Nunito" }}
                variant="h5"
                gutterBottom
              >
                Kullanıcı Girişi
              </Typography>

              <PersonOutlineOutlinedIcon sx={{ fontSize: "2rem" }} />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
            }}
          >
            <h3
              style={{ textAlign: "left", fontFamily: "Nunito", opacity: ".7" }}
            >
              Yönetici
            </h3>
            <Button
              onClick={handleSecondButton}
              sx={{
                "&:focus": {
                  backgroundColor: "#1976d2",
                  "& .MuiTypography-root": {
                    color: "whitesmoke",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                },
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                width: "100%",
                paddingY: "4.5rem",
                paddingX: ".6rem",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
              variant="outlined"
              color="primary"
            >
              <Typography
                style={{ fontFamily: "Nunito" }}
                variant="h5"
                gutterBottom
              >
                Yönetici Girişi
              </Typography>

              <AdminPanelSettingsOutlinedIcon sx={{ fontSize: "2rem" }} />
            </Button>
          </Box>
        </Box>
        <Button
          onClick={pageNavigator}
          sx={{ alignSelf: "end", textTransform: "capitalize" }}
          variant="outlined"
        >
          Devam Et <EastOutlinedIcon sx={{ marginLeft: ".7rem" }} />
        </Button>
      </Container>
    </main>
  );
}
export default UserOrAdmin;
