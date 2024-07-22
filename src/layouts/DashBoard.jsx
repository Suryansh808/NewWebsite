import * as React from 'react';
import { useLocation , Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
    const { state: formData } = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='p-2'>
        <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
            <div>
                <Link to='/contact-us'>Back to Resume</Link>
            <p>{formData.fullName}</p>
             <p>{formData.email}</p>
             </div>
        </Grid>
        <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
         
        </Grid>
        <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
        
        </Grid>
        <Grid item xs={6} className='h-[50vh] border-2 rounded-md'>
         
        </Grid>
      </Grid>
    </Box>
  );
}
