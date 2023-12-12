// import React from "react";
// import { Formik, Form } from "formik";
// import { TextField } from "./TextField";
// import * as Yup from "yup";

// const onayal = () => {
//     const validate = Yup.object({
//         firsName:Yup.string()
//         .max (15, 'Must be 15 characters or less')
//         .required ('Required'),
//         lastName:Yup.string()
//         .max (20, 'Must be 20 characters or less')
//         .required ('Required'),
//         email:Yup.string()
//         .email ('email is invalid')
//         .required (' email is Required'),
//         phone:Yup.string()
//         .max (15, 'Must be 15 characters or less')
//         .required ('Required'),
//        Address:Yup.string()
//         .max (150, 'Must be 150 characters or less')
//         .required ('Required'),
//         Approval:Yup.string()
//         .max (150, 'Must be 150 characters or less')
//         .required ('Required'),
//     })
//   return (
//     <Formik
//       initialValues={{
//         firsName: "",
//         lastName: "",
//         Email: "",
//         Phone: "",
//         Address: "",
//         Approval:"",
//       }}
//       validationSchema={validate}
//     >
//       {(formik) => (
//         <div>
//           <h1 className="my-4 font-weight-bold-display-4">Müşteri Kaydı Oluştur</h1>
//           <br />
//           <Form>
//             <TextField label="Müşteri adı" name="firstName" type="text" />

//             <TextField label= "Müşteri Soyadı" name="lastName" type="text"/>
//             <TextField label= "Email" name="mail" type="email"/>
//             <TextField label= "Phone" name="phone" type="number"/>
//             <TextField label= "Adress" name="adress" type="text"/>
//             <TextField label= "Approval" name="Approval" type="text"/>
//          <button className="btn-btn red mt-3" type="submit"> EKLE</button>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// };

// export default onayal;


// 


import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Checkbox, FormControlLabel } from '@mui/material';

export default function Giris() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    checkbox1: false, // İlk checkbox durumu
    checkbox2: false, // İkinci checkbox durumu
    checkbox3: false, // Üçüncü checkbox durumu
  });

  const handleChange = (e, checkboxName) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [checkboxName]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Verileri:', formData);
    // Burada kayıt oluşturma veya gönderme işlemi yapılabilir
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom color="primary" marginTop="50px">
        Onayı Alınacak Kişinin
      </Typography> <br></br>
      <form marginTop="25px" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Adı"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e, 'checkbox1')} // İlk checkbox için
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Soyadı"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e, 'checkbox2')} // İkinci checkbox için
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-posta"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e, 'checkbox3')} // Üçüncü checkbox için
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telefon"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Adres"
              multiline
              rows={4}
              name="message"
              value={formData.adres}
              onChange={handleChange}
              required
              className="custom-text-field"
            />
          </Grid>
          <h6 style={{ marginTop: '20px', marginLeft: '30px' }}>onay olma yöntemi</h6>


          <Grid container spacing={2}>
        
  <Grid item xs={3}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.checkbox1}
          onChange={(e) => handleChange(e, 'checkbox1')}
          name="checkbox1"
        />
      }
      label="SMS"
    />
  </Grid>
  <Grid item xs={3}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.checkbox2}
          onChange={(e) => handleChange(e, 'checkbox2')}
          name="checkbox2"
        />
      }
      label="TABLET"
    />
  </Grid>
  <Grid item xs={3}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.checkbox3}
          onChange={(e) => handleChange(e, 'checkbox3')}
          name="checkbox3"
        />
      }
      label="QR KOD"
    />
  </Grid>
  <Grid item xs={3}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.checkbox4}
          onChange={(e) => handleChange(e, 'checkbox4')}
          name="checkbox4"
        />
      }
      label="İMZA "
    />
  </Grid>
</Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Onay Al
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}