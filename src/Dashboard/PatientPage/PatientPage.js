import { Grid } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';
import PatientBody from './PatientBody';
import PatientDetails from './PatientDetails';

const PatientPage = () => {
    return (
        <>
            <Grid sx={{bgcolor:blueGrey[50], pr:2, pb:3}} container spacing={2} >

            {/* Patient Body */}
                <Grid item xs={12} sm={8} md={8}>
                    <PatientBody/>
                </Grid>

                {/* Patient Details */}
                <Grid item xs={12} sm={4} md={4}>
                    <PatientDetails/>
                </Grid>
            </Grid>   
        </>
    );
};

export default PatientPage;