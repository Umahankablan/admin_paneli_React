import { Box, Typography, Paper, Grid } from "@mui/material";
import "../assets/css/animation.css";
import ChevronRight from "@mui/icons-material/ChevronRight";
import {
  OfflinePin,
  Person,
  Layers,
  Reply,
  Cached,
  Message,
} from "@mui/icons-material";
import React from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../assets/css/chart_istatics.css";

export default function Default() {
  const styles = {
    Typography: {
      color: "rgba(11, 127, 171)",
      fontFamily: "Nunito",
      fontSize: "1.8rem",
    },
    Icons: {
      marginBottom: "1rem",
      fontSize: "3rem",
      color: "rgba(11, 127, 171)",
      fontFamily: "Nunito",
    },
    Style_2_row_line: {
      color: "black",
      fontWeight: "bold",
      fontFamily: "Nunito",
    },
  };

  const data = [
    { name: "Ocak", value: 10 },
    { name: "Şubat", value: 35 },
    { name: "Mart", value: 65 },
    { name: "Nisan", value: 21 },
    { name: "Mayıs", value: 36 },
    { name: "Haziran", value: 26 },
    { name: "Temmuz", value: 30 },
    { name: "Ağustos", value: 46 },
    { name: "Eylül", value: 54 },
    { name: "Ekim", value: 19 },
    { name: "Kasım", value: 76 },
    { name: "Aralık", value: 81 },
  ];

  return (
    <div style={{ width: "100%" }} className="animated-components">
      <Box sx={{ fontFamily: "Nunito" }}>
        <Typography sx={{ fontFamily: "Nunito" }} variant="h5">
          Yönetim Ekranı
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontFamily: "Nunito" }} variant="h6"></Typography>
          Giriş <ChevronRight sx={{ marginX: ".7rem" }} />
          <Typography sx={{ fontFamily: "Nunito" }} variant="h7">
            Ana Ekran 
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ marginY: "2rem" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <OfflinePin sx={styles.Icons} />
              <Typography color="black" variant="body1">
                Onay
              </Typography>
              <Typography sx={styles.Typography} variant="body1">
                1354
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Person sx={styles.Icons} />
              <Typography variant="body1">Kullanıcı</Typography>
              <Typography sx={styles.Typography} variant="body1">
                16
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Layers sx={styles.Icons} />
              <Typography variant="body1">Onay Menü</Typography>
              <Typography sx={styles.Typography} variant="body1">
                9
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/*  2 ROW LINE */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Reply sx={styles.Style_2_row_line} />
              <Typography sx={styles.Style_2_row_line} variant="body1">
                Süresi Geçen onaylar
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Cached sx={styles.Style_2_row_line} />
              <Typography variant="body1" sx={styles.Style_2_row_line}>
                Abonelik yenileme tarihi
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Message />
              <Box
                sx={{ marginLeft: ".7rem" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography sx={styles.Style_2_row_line} variant="body1">
                  Kalan Sms
                </Typography>
                <Typography sx={styles.Style_2_row_line} variant="body1">
                  571
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <div className="chart-container">
        <Grid item xs={12} sx={{ overflow: "auto" }}>
          <Paper
            elevation={0}
            sx={{ p: 0, maxWidth: window.innerWidth > 800 ? "100%" : "350px" }}
          >
            <ResponsiveContainer
              minWidth={window.innerWidth >= 800 ? "100%" : 800}
              height={350}
            >
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <defs>
                  <linearGradient id="colorUplow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="url(#colorUplow)"
                  dot={{ strokeWidth: 1, r: 4, fill: "#8884d8" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}



