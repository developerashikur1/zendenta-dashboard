import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Appointments from './Appointments';

const PatientBody = () => {
    const [patient, setPatient] = useState({
        name: "Diane Cooper",
        email: "xyz",
        past: 15,
        upcoming: 2,
        gender: "Female",
        birthday: "Feb 24th, 1997",
        phone: 111111,
        streetAddress: "JI. Diponegoro No. 21",
        zipCode: 655849,
        memberStatus: "Active Member",
        registerDate: "Feb 24th, 1997",
        city:"Cilacap"
      });

    
    console.log(patient["e-mail"])
    return (
        <>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} md={4}>
                        <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center', p:3}}>
                            <img style={{width:80, borderRadius:'100%', marginTop:'10px', marginBottom:'15px'}} src='https://mui.com/static/images/avatar/3.jpg' alt=''/>
                            <Typography variant="h6" fontSize={22} fontWeight={800} noWrap component="div">
                                {patient?.name}
                            </Typography>
                            <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                xyz@gmail.com
                            </Typography>
                            <Grid sx={{my:2}} container spacing={0}>
                                <Grid sx={{display:'flex', flexDirection:'column', alignItems:'center', borderRight:`1px solid grey`}} item xs={6}>
                                    <Typography variant="h6" fontSize={16} fontWeight={800} noWrap component="div">
                                        {patient?.past}
                                    </Typography>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Past
                                    </Typography>
                                </Grid>
                                <Grid sx={{display:'flex', flexDirection:'column', alignItems:'center'}} item xs={6}>
                                    <Typography variant="h6" fontSize={16} fontWeight={800} noWrap component="div">
                                        {patient?.upcoming}
                                    </Typography>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Upcoming
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button style={{width:'100%', textTransform:'none', borderColor:'grey', color:'grey'}} variant="outlined">Send Message</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={8}>
                      <Paper  sx={{p:3, height:'100%'}}>
                        <Grid container spacing={0}>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Gender
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.gender}
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Birthday
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.birthday}
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Phone Number
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.phone}
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.streetAddress}
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Street Address
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.city}
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        City
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.zipCode}
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Zip Code
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.memberStatus}
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Member Status
                                    </Typography>
                            </Grid>
                            <Grid sx={{py:3}} item xs={6} sm={4} md={4}>
                                    <Typography sx={{color:"rgba(128, 128, 128, 0.649)"}} variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        {patient?.registerDate}
                                    </Typography>
                                    <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                        Register Date
                                    </Typography>
                            </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                </Grid>
            </Box>  

            {/* Appointment Tabs */}
            <Paper sx={{ mt:3, p:3}}>
                <Box  sx={{height:'250px', overflow:'hidden', overflowY:'scroll'}}>
                        <Appointments/>
                </Box> 
            </Paper>
        </>
    );
};

export default PatientBody;