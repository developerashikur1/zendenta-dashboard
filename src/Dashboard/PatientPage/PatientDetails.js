import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { blueGrey, grey, indigo } from '@mui/material/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const PatientDetails = () => {
    // States
    const [files, setFiles]  = useState([]);

    // useEffects
    useEffect(()=>{
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/Files')
        .then(res=>res.json())
        .then(data=>setFiles(data[0].files))
    },[])

    return (
        <>
            {/* Notes  Component */}
            <Box>
                <Paper sx={{p:2, mb:3}}>

                {/* note start */}
                    <Box sx={{display:'flex',  justifyContent:'space-between', alignItems:'center'}}>
                        <Typography variant="h6" fontSize={14} fontWeight={600} noWrap component="div">
                                        Notes
                        </Typography>
                        <Button size='small' sx={{borderRadius:'10px', fontSize:16, fontWeight:700, px:2, py:1, color:indigo['A400'], bgcolor:'white',  textTransform:'none'}}>
                        See All
                        </Button>
                    </Box>

                    {/* note middle */}
                    <Box sx={{p:{xs:3, sm:1, md:3}, pt:{sm:3}, bgcolor:blueGrey[50], position:'relative', mb:3}}>
                        <Typography variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                        - This is lorem ipsum dolor sit ammet
                        </Typography>
                        <Typography variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                        - one is lorem ipsum dolor sit ammet
                        </Typography>
                        <Typography variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                        - seven is lorem ipsum dolor sit ammet
                        </Typography>
                        
                        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                            <Button size='small' sx={{borderRadius:'5px', fontSize:14, fontWeight:700, px:{xs:2, sm:1, md:2}, color:'white', bgcolor:indigo['A400'], '&:hover':{bgcolor:indigo['A400']}, textTransform:'none', mt:4,}}>
                            save note
                            </Button>
                        </Box>
                    </Box>

                    {/* node last */}
                    <Box>
                        <Typography variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                      lorem ipsum dolor sit ammet
                        </Typography>
                        <Typography sx={{display:'flex', alignItems:'center', color:grey[500]}} variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                     <PersonOutlineIcon sx={{fontSize:16, color:indigo['A400']}}/> &nbsp; Drg Mega Nanade
                        </Typography>
                        <Typography sx={{display:'flex', justifyContent:'flex-end', color:grey[500], mt:-2.2, mb:2}} variant="h6" fontSize={12} fontWeight={500} noWrap component="div">
                        20 Nov 2019
                        </Typography>
                    </Box>
                </Paper>
            </Box>   

            {/* Files/Document section */}
            <Box>

                {/* files naming and first section */}
                <Paper sx={{p:{xs:3, sm:0.5, md:3}}}>
                    <Box sx={{display:{xs:'flex', sm:'block', md:'flex'},  justifyContent:'space-between', alignItems:'center'}}>
                        <Typography variant="h6" fontSize={14} fontWeight={600} noWrap component="div">
                                        File / Documents
                        </Typography>
                        <Button size='small' sx={{borderRadius:'10px', fontSize:16, fontWeight:700, px:{xs:2, sm:0, md:2}, py:1, color:indigo['A400'], bgcolor:'white',  textTransform:'none'}}>
                               <NoteAddOutlinedIcon/> &nbsp; Add Files
                        </Button>
                    </Box>

                    {/* files mapping and second section  */}
                    {files.map((file, index)=><Paper key={`uniq+ ${index}`} sx={{p:1.5, display:'flex', alignItems:'center', justifyContent:'space-between',mb:1}}>
                        <Link style={{textDecoration:'none'}} to=''>
                            <Typography sx={{display:'flex', alignItems:'center', color:grey[800]}} variant="h6" fontSize={13} fontWeight={500} noWrap component="div">
                                        <DescriptionOutlinedIcon sx={{fontSize:16, color:indigo['A400']}}/> &nbsp;
                                        {file} lorem Ipsum
                            </Typography>
                        </Link>
                        {index % 2 === 0 ? <span sx={{display:'flex', alignItems:'center'}}><DeleteOutlineIcon sx={{fontSize:18, color:grey[600]}}/><ArrowCircleDownIcon sx={{fontSize:18, color:indigo['A400']}}/></span> : 
                        <Typography variant="h6" fontSize={12} sx={{color:grey[500]}} fontWeight={400} noWrap component="div">
                        150kb
                        </Typography>
                        }
                    </Paper>)}
                </Paper>
            </Box>
        </>
    );
};

export default PatientDetails;