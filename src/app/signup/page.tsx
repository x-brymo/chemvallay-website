// import React, { useState } from 'react';
// import { Button, TextField, Grid, Box, Typography } from '@mui/material';
// export default  function  SignUp  () {
// *   //const classes = useStyles();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <Grid container className={classes.container}>
//             <form onSubmit={handleSubmit} className={classes.form}>
//                 <Box marginBottom={2}>
//                     <Typography variant="h4" align="center">
//                         Sign Up
//                     </Typography>
//                 </Box>
//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     fullWidth
//                     required
//                 />
//                 <Box marginTop={2} marginBottom={2}>
//                     <TextField
//                         label="Password"
//                         variant="outlined"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         fullWidth
//                         required
//                     />
//                 </Box>
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                     Sign Up
//                 </Button>
//             </form>
//         </Grid>
//     );
// };

