// import { Typography } from "@mui/material";
// import "../assets/css/animation.css";
// export default function Giris() {
//     return(
// <div className="animated-components">
//        <Typography  variant="h1" component="h2">
//                 Giriş Sayfası
//        </Typography>
// </div>
//     )
// }


import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import "../assets/css/animation.css";
import { Padding } from "@mui/icons-material";

export default function Giris() {
  // Kullanıcı verilerini saklamak için bir örnek kullanıcı verisi dizisi
  const [users, setUsers] = useState([
    { id: 1, name: "Umahan Kablan", email: "Umahan@example.com" },
    { id: 2, name: "aynur  Demiray", email: "Demiray2@example.com" },
    { id: 3, name: "Yiğit Aslan", email: "Aslan3@example.com" },
  ]);

  // Kullanıcı ekleme işlevi
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: "Yeni Kullanıcı",
      email: "yeni@example.com",
    };
    setUsers([...users, newUser]);
  };

  // Kullanıcı silme işlevi
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Kullanıcı güncelleme işlevi
  const updateUser = (id) => {
    // Kullanıcı güncelleme mantığı burada uygulanabilir
    alert(`Kullanıcı Güncellendi: ID ${id}`);
  };

  return (
    <div className="animated-components">
    <Typography variant="h4" component="h4" style={{ color: "gray", textAlign: "left", marginTop :"20px",marginLeft:"75px" }}>
  Kullanıcı Oluşturma Sayfası
</Typography>

      <br></br>
      <br></br>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Adı</TableCell>
              <TableCell>E-posta</TableCell>
              <TableCell>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="custom-table-row ">
            {users.map((user) => (
              <TableRow key={user.id}>
                {/* <TableCell>{user.id}</TableCell> */}
                <TableCell style={{ color: 'primary' }}>{user.id}</TableCell>

                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => updateUser(user.id)}
                  >
                    Güncelle
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => deleteUser(user.id)}
                    style={{ color: "white", background: "red" }}
                  >
                    Sil
                  </Button>

                  {/* <Button variant="outlined" onClick={() => deleteUser(user.id)}>Sil</Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        onClick={addUser}
        style={{ backgroundColor: "green", marginTop: "15px",  }}
      >
        Kullanıcı Ekle
      </Button>
    </div>
  );
}
