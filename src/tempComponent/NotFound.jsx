// import { Button, Typography, Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import useDocumentTitle from '../hooks/useDocumentTitle';

// const NotFound = () => {
//   useDocumentTitle('Not Found');
  
//   return (
//     <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' }}>
//       <Typography variant="h3">
//         404
//       </Typography>
//       <Typography variant="h6" color="textSecondary" paragraph>
//         Sorry, the page you visited does not exist.
//       </Typography>
//       <Link to="/" style={{ textDecoration: 'none' }}>
//         <Button variant="contained" sx={{color: '#ffff !important' , fontWeight : 'bold' , background: '#065098 !important'}}>
//           Back Home
//         </Button>
//       </Link>
//     </Container>
//   );
// };

// export default NotFound;

import React from 'react'

export default function NotFound() {
  return (
    <div>
      Not Found
    </div>
  )
}
