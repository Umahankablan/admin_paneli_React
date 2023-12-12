// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";



// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));
// const App = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "kablan",
//     phoneNumber: "4343434343",
//     email: "info@gmail.com",
//     department: " front-end",
 
//   });

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className={classes.root}>
//     <TextField
//       id="outlined-name"
//       label="Name"
//       variant="outlined"
//       value={formData.name}
//       onChange={handleChange}
//       disabled={false}
//     />

     
//       <TextField
//         id="outlined-surname"
//         label="Surname"
//         variant="outlined"
//         value={formData.surname}
//         onChange={handleChange}
//         disabled={false}
//       />
//       <TextField
//         id="outlined-phone-number"
//         label="Phone Number"
//         variant="outlined"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         disabled={false}
//       />
//       <TextField
//         id="outlined-email"
//         label="Email"
//         variant="outlined"
//         value={formData.email}
//         onChange={handleChange}
//         disabled={false}
//       />
//       <TextField
//         id="outlined-department"
//         label="Department"
//         variant="outlined"
//         value={formData.department}
//         onChange={handleChange}
//         disabled={false}
//       />
//       <Button variant="contained" color="primary" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // formData içindeki verileri kullanabilir veya gönderebilirsiniz.
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        id="outlined-surname"
        label="Surname"
        variant="outlined"
        value={formData.surname}
        onChange={handleChange}
      />
      <TextField
        id="outlined-phone-number"
        label="Phone Number"
        variant="outlined"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <TextField
        id="outlined-email"
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        id="outlined-department"
        label="Department"
        variant="outlined"
        value={formData.department}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default App;
