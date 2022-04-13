import { Box, Button, ButtonGroup, Divider, Grid, Paper, Typography } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { indigo, lightGreen } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EventNoteIcon from '@mui/icons-material/EventNote';

const Appointments = () => {
    const [selector, setSelector] = useState(1);
    const [changeSelector, setChangeSelector] = useState(0);
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
        .then(res=>res.json())
        .then(data=>{
            const filter = data[0];
            const upComing = "Upcoming Appointments";
            const postComing = "Post Appointment";
            setAppointments([filter[upComing],filter[postComing] ])
        });
    },[])
    return (
        <>
            <Box>
                    <Box sx={{bgcolor:blueGrey[50], display:'inline-block', p:1, borderRadius:'10px', mb:3}}>
                        <Button onClick={()=>setSelector(1)} size='small' sx={{borderRadius:'10px', mr:3, bgcolor:`${selector === 1 && 'white'}`, color:`${selector === 1 ? indigo['A400'] : grey[800]}`, px:2, py:1, '&:hover':{bgcolor:'white', color:indigo['A400']}}}>
                            Upcoming Appointments
                        </Button>
                        <Button onClick={()=>setSelector(2)} size='small' sx={{borderRadius:'10px', mr:3, bgcolor:`${selector === 2 && 'white'}`, color:`${selector === 2 ? indigo['A400'] : grey[800]}`, px:2, py:1, '&:hover':{bgcolor:'white', color:indigo['A400']}}}>
                            Past Appointments
                        </Button>
                        <Button onClick={()=>setSelector(3)} size='small' sx={{borderRadius:'10px', mr:3, bgcolor:`${selector === 3 && 'white'}`, color:`${selector === 3 ? indigo['A400'] : grey[800]}`, px:2, py:1, '&:hover':{bgcolor:'white', color:indigo['A400']}}}>
                            Medical Records
                        </Button>
                    </Box>
                    
                    <Box sx={{bgcolor:blueGrey[50], borderRadius:'10px', mb:3}}>
                        <Box sx={{display:'flex', p:2, justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid grey'}}>
                            <Typography variant="h6" fontSize={12} fontWeight={600} noWrap component="div">
                                            Root Canal Treatment
                            </Typography>
                            <Button size='small' sx={{borderRadius:'10px', mr:3, px:2, py:1, color:grey[800], bgcolor:'white', '&:hover':{color:indigo['A400']}, textTransform:'none'}}>
                                <ArrowDropUpIcon/> &nbsp; show Previous Treatment
                            </Button>
                        </Box> 
                        <Box sx={{pr:2, pl:3, position:'relative'}}>
                            <Box sx={{ borderLeft:'3.5px solid', py:3, borderColor:indigo['A400'], pl:3}}>
                                {appointments.map((appointment, index)=><Paper key={`new+ ${index}`} onMouseOver={()=>setChangeSelector(index)} sx={{p:3, "&::before":{content:'""', position:'absolute', height:'15px', width:'15px', bgcolor:'white', border:`3.5px solid ${changeSelector === index ? lightGreen[600] : indigo['A400']}`, p:0.8, borderRadius:'100%', left:'15.5px'}, mb:2.5}}>
                                    <Grid container spacing={0}>
                                        <Grid justifyContent='center' sx={{display:'flex', flexDirection:'column'}} item xs={12} sm={2.5}>
                                            <Typography variant="h6" fontSize={18} fontWeight={500} noWrap component="div">
                                                            {appointment?.Date}
                                            </Typography>
                                            <Typography variant="h6" sx={{color:grey[500]}} fontSize={12} fontWeight={500} noWrap component="div">
                                                            {appointment?.Time}
                                            </Typography>
                                        </Grid>
                                        <Grid alignItems='center' justifyContent='center' sx={{display:'flex', flexDirection:'column', borderRight:'1px solid grey', borderLeft:'1px solid grey'}} item xs={12} sm={3.5}>
                                            <Typography variant="h6" sx={{color:grey[500]}} fontSize={12} fontWeight={500} noWrap component="div">
                                                            Treatment
                                            </Typography>
                                            <Typography variant="h6" fontSize={16} fontWeight={800} noWrap component="div">
                                                            {appointment?.Treatment}
                                            </Typography>

                                        </Grid>
                                        <Grid alignItems='center' justifyContent='center' sx={{display:'flex', flexDirection:'column'}} item xs={12} sm={2}>
                                            <Typography variant="h6" sx={{color:grey[500]}} fontSize={12} fontWeight={500} noWrap component="div">
                                                            Dentist
                                            </Typography>
                                            <Typography variant="h6" fontSize={14} fontWeight={800} noWrap component="div">
                                                            {appointment?.Dentist}
                                            </Typography>

                                        </Grid>
                                        <Grid alignItems='center' justifyContent='center' sx={{display:'flex', flexDirection:'column'}} item xs={12} sm={2}>
                                            <Typography variant="h6" sx={{color:grey[500]}} fontSize={12} fontWeight={500} noWrap component="div">
                                                            Nurse
                                            </Typography>
                                            <Typography variant="h6" fontSize={14} fontWeight={800} noWrap component="div">
                                                            {appointment?.Nurse}
                                            </Typography>

                                        </Grid>
                                        <Grid alignItems='center' justifyContent='center' sx={{display:'flex', flexDirection:'column'}} item xs={12} sm={2}>
                                            <Button sx={{textTransform:'none'}} size="small"><EventNoteIcon/> &nbsp; Note</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>)}
                            </Box>

                        </Box>
                    </Box>
            </Box>   
        </>
    );
};

export default Appointments;