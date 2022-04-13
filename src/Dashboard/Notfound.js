import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h3>Page Not Found</h3>
            <br/>
            <Link to='patientpage'><Button>back home</Button></Link>
        </div>
    );
};

export default Notfound;