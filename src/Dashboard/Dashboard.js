import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { blueGrey, grey, indigo } from '@mui/material/colors';
import { Accordion, AccordionSummary, Avatar, Badge, Breadcrumbs, Button, Grid, InputBase, ToggleButton } from '@mui/material';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PaidIcon from '@mui/icons-material/Paid';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import PatientPage from './PatientPage/PatientPage';
import { Link, Outlet } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// const drawerWidth = 240;

const Dashboard = () =>{
  // states
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(240);
  const [clicked, setClicked] = useState(3);
  const [doctor, setDoctor] = useState({});
  const [patient, setPatient] = useState({});
  const [clickedMenu, setClickedMenu] = useState('Patient');
  

  // handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

    // useEffects
      useEffect(()=>{
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
        .then(res=>res.json())
        .then(data=>setDoctor(data[0]))
      },[]);

      useEffect(()=>{
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
        .then(res=>res.json())
        .then(data=>setPatient(data[0]))
      },[]);


      // Drawer
  const drawer = (
    <div sx={{ height:'100%', alignContent: 'space-between', position:'relative' }}>
      <Grid container sx={{ alignItems:'center', pb:1, pt:1, justifyItems:'center', justifyContent:'center' }} spacing={0}>
        {/* Drawer Header */}
        <Grid item xs={3}>
        <AddModeratorIcon sx={{fontSize:36, color:indigo['A400']}} />
        </Grid>
        <Grid sx={{display:'flex', flexDirection:'column'}} item xs={7}>
        <Typography variant="h6" fontSize={20} fontWeight={800} noWrap component="div">
          Zendenta
        </Typography>
        <Typography variant="h6" fontSize={10} fontWeight={400} noWrap component="div">
          Cabut gilgi tanpa sakit
        </Typography>
        </Grid>

        {/* Drawer Control */}
        <Grid item xs={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display:{sm:'none'}}}
          >
            <ChevronLeftIcon sx={{color:indigo['A400']}} />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>setDrawerWidth(drawerWidth === 240 ? 0 : 240)}
            sx={{ mr: 2, display: {xs:'none', sm:'flex'},}}
          >
            <ChevronLeftIcon sx={{color:indigo['A400']}} />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />

      {/* Nav Menus */}
      <List>
          <Link onClick={()=>setClickedMenu('Overview')} style={{textDecoration:'none', color:'grey'}} to='overview'>
            <ListItem sx={{bgcolor:`${clicked === 1 && indigo['A400']}`, color:`${clicked === 1 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(1)} button>
              <ListItemIcon>
                <SpeedIcon sx={{bgcolor:`${clicked === 1 && indigo['A400']}`, color:`${clicked === 1 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Overview' />
            </ListItem>
          </Link>
          <Link onClick={()=>setClickedMenu('Calender')} style={{textDecoration:'none', color:'grey'}} to='calendar'>
            <ListItem sx={{bgcolor:`${clicked === 2 && indigo['A400']}`, color:`${clicked === 2 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(2)} button>
              <ListItemIcon>
                <CalendarMonthIcon sx={{bgcolor:`${clicked === 2 && indigo['A400']}`, color:`${clicked === 2 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Calendar' />
            </ListItem>
          </Link>
          <Link onClick={()=>setClickedMenu('Patient')} style={{textDecoration:'none', color:'grey'}} to='patientpage'>
            <ListItem sx={{bgcolor:`${clicked === 3 && indigo['A400']}`, color:`${clicked === 3 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(3)} button>
              <ListItemIcon>
                <PersonOutlineRoundedIcon sx={{bgcolor:`${clicked === 3 && indigo['A400']}`, color:`${clicked === 3 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Patient' />
            </ListItem>
          </Link>
          <Link onClick={()=>setClickedMenu('Messages')} style={{textDecoration:'none', color:'grey'}} to='messages'>
            <ListItem sx={{bgcolor:`${clicked === 4 && indigo['A400']}`, color:`${clicked === 4 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(4)} button>
              <ListItemIcon>
                <CommentRoundedIcon sx={{bgcolor:`${clicked === 4 && indigo['A400']}`, color:`${clicked === 4 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Messages' />
            </ListItem>
          </Link>
          <Link onClick={()=>setClickedMenu('Payment')} style={{textDecoration:'none', color:'grey'}} to='payment'>
            <ListItem sx={{bgcolor:`${clicked === 5 && indigo['A400']}`, color:`${clicked === 5 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(5)} button>
              <ListItemIcon>
                <PaidIcon sx={{bgcolor:`${clicked === 5 && indigo['A400']}`, color:`${clicked === 5 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Payment Information' />
            </ListItem>
          </Link>
          <Link onClick={()=>setClickedMenu('Settings')} style={{textDecoration:'none', color:'grey'}} to='settings'>
            <ListItem sx={{bgcolor:`${clicked === 6 && indigo['A400']}`, color:`${clicked === 6 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} onClick={()=>setClicked(6)} button>
              <ListItemIcon>
                <AddRoadIcon sx={{transform:'rotate(270deg)',bgcolor:`${clicked === 6 && indigo['A400']}`, color:`${clicked === 6 && 'white'}`, '&:hover':{color:'white', bgcolor:indigo['A400']}}} />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
          </Link>
      </List>

      {/* Help Button in Nav Menus */}
      <Box sx={{height:'50%', p:3, display:'flex', alignItems: 'flex-end', borderBottom:'1px solid grey', mb:3}}>
        <Link style={{textDecoration:'none'}} to=''>
                <Typography sx={{display:'flex', alignItems:'center', color:grey[800]}} variant="h6" fontSize={15} fontWeight={500} noWrap component="div">
                <HelpOutlineIcon sx={{fontSize:19, color:indigo['A400']}}/> &nbsp; help?
          </Typography>
        </Link>
      </Box>

      {/* Doctor accordion in Nav Menus */}
      <Box>
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Avatar sx={{width:32, height:32, mr:1}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Box>
            <Typography fontSize={13} fontWeight={800}>{doctor?.name}</Typography>
            <Typography sx={{color:grey[500]}} fontSize={12} fontWeight={500}>{doctor?.specification}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Doctor Details
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );

  
  
  // Dashboard Main Body Section
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />

      {/* App Ber */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow:'none'
        }}
      >
      
      {/* App Bar-1 */}
        <Toolbar sx={{bgcolor:blueGrey[50],display:'flex', alignItems:'center', justifyContent:'space-between'}}>

        {/* App Bar-1 Left Side */}
          <Box sx={{display:'flex', alignItems:'center'}}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: {sm:'none'}}}
              >
                <MenuIcon sx={{color:'black'}}/>
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={()=>setDrawerWidth(drawerWidth === 240 ? 0 : 240)}
                sx={{ mr: 2, display: {xs:'none', sm:'flex'},}}
                style={{display:`${drawerWidth===240 ? 'none' : 'flex'}`}}
              >
                <ChevronRightIcon sx={{ color:grey[800]}} />
              </IconButton>
                <Typography sx={{display:'flex', alignItems:'center', color:grey[800]}} variant="h6" fontSize={20} fontWeight={800} noWrap component="div">
                      <PersonOutlineRoundedIcon sx={{fontSize:36, color:indigo['A400']}}/> &nbsp; {patient?.name}
                </Typography>
          </Box>

          {/* App Bar-1 Right Side */}
            <Box sx={{display:{xs:'none', sm:'block',md:'block'}}}>
              <InputBase
                sx={{ ml: 1, flex: 1, border:'1px solid grey', borderRadius:'30px', px:1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search Now' }}
              />
              <ToggleButton
                value="check"
                sx={{borderRadius:'100%', height:37,width:37, bgcolor:indigo['A700'], ml:1, '&:hover':{bgcolor:indigo['A700']}}}
              >
                <AddIcon sx={{color:'white', fontWeight:800}}/>
              </ToggleButton>
              <Badge color='secondary' sx={{bgcolor:'white', p:1, borderRadius:'100%', ml:1}} variant="dot">
                <NotificationsIcon sx={{color:'black'}} />
              </Badge>
            </Box>
        </Toolbar>

      {/* App Bar-2 */}
        <Toolbar sx={{bgcolor:blueGrey[50], display:'flex', alignItems:'center',justifyContent:'space-between', borderTop:`1px solid ${blueGrey[100]}`, borderBottom:`1px solid ${blueGrey[100]}`}}>

        {/* App Bar-2 Left Side */}
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" to="/patientpage">
                Home
              </Link>
              <Typography color="text.primary">{clickedMenu}</Typography>
            </Breadcrumbs>

            {/* App Ber-2 Right Side */}
            <Box sx={{display:{xs:'none', sm:'block',md:'block'}}}>
              <Button sx={{textTransform:'none', alignItems:'center',mr:1, color:'black', px:2, py:1, bgcolor:'white', '&:hover':{bgcolor:'white'}}} variant="contained" disableElevation>
                  <OpenInNewIcon/> &nbsp; edit patient
              </Button>
              <Button sx={{textTransform:'none', alignItems:'center', color:'black', px:-1, py:1, bgcolor:'white', '&:hover':{bgcolor:'white'}}} variant="contained" disableElevation>
              <PrintIcon sx={{color:'black', fontSize:22}} />
              </Button>
            </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        {/* Drawer section */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Body Section */}
      <Box
        component="main"
        sx={{ flexGrow: 1, pl:3, pr:2, pb:3, pt:11, width: { sm: `calc(100% - ${drawerWidth}px)`}}}
        
      >
        <Toolbar />
        
        <Outlet/>

      </Box>
    </Box>
  )
}

export default Dashboard;
