// import { Box, Typography } from "@mui/material";
// import '../assets/css/animation.css';
// export default function Default(){
//     return(
//         <div  className="animated-components">
//         <Box>
//         <Typography variant="h2">
//             Departmanlar
//         </Typography>

// </Box>
// </div>
//     )
// }

import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/css/animation.css';

export default function Departmanlar() {
  return (
    <div className="animated-components">
      <Box>
        <Typography variant="h2" style={{ marginTop: '20px', textAlign: 'center' }}>
          Departmanlar
        </Typography>
        <div>
          <Typography variant="h4">Firma 1</Typography>
          <Typography variant="body1">Firma 1 açıklaması burada.</Typography>
          <hr />
        </div>
        <div>
          <Typography variant="h4">Firma 2</Typography>
          <Typography variant="body1">Firma 2 açıklaması burada.</Typography>
          <hr />
        </div>
        <div>
          <Typography variant="h4">Firma 3</Typography>
          <Typography variant="body1">Firma 3 açıklaması burada.</Typography>
          <hr />
        </div>
        <div>
          <Typography variant="h4">Firma 4</Typography>
          <Typography variant="body1">Firma 4 açıklaması burada.</Typography>
          <hr />
        </div>
        <div>
          <Typography variant="h4">Firma 5</Typography>
          <Typography variant="body1">Firma 5 açıklaması burada.</Typography>
          <hr />
        </div>
      </Box>
    </div>
  );
}