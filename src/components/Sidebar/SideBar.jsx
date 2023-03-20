import * as React from 'react';
import {Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import *as RxIcon from 'react-icons/rx';
import *as GIIcon from 'react-icons/gi';
import *as FaIcon from 'react-icons/fa';
import *as RiIcon from  'react-icons/ri';

import HorizontalStepper from '../Stepper/Stepper';
import FileSelector from '../DragandDrop/FileSelector';
import BottomNavbar from '../BottomNav/BottomNavbar';
import { useSelector } from 'react-redux';
import MapChannels from '../Channels/MapChannels';
import PreviewConfig from '../PreviewConfig/PreviewConfig';

const drawerWidth = 280;

function ResponsiveDrawer(props) {
    const montage = useSelector(state => state.montage);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ color: 'white' }}>
            <Typography variant="h5" align="center" fontFamily="DM Sans" fontWeight="700" fontSize="28px" sx={{ my: 4 }} >
                React Test
            </Typography>
            <Divider sx={{ width: '80%', margin: 'auto', height: "2px", backgroundColor: "#4F4F4F" }} />
            <ListItem disablePadding sx={{ my: 1 }}>
                <ListItemButton>
                    <ListItemIcon >
                        <RxIcon.RxDashboard width="20px" style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText >
                        <Typography variant="p" align="center" fontFamily="DM Sans" fontWeight="400" fontSize="18px">
                            Dashboard
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ my: 1 }}>
                <ListItemButton>
                    <ListItemIcon >
                        <NoteAddOutlinedIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText >
                        <Typography variant="p" align="center" fontFamily="DM Sans" fontWeight="400" fontSize="18px">
                            Montages
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ my: 1 }}>
                <ListItemButton sx={{ backgroundColor: "#0F4662" }}>
                    <ListItemIcon>
                        <GIIcon.GiTwoCoins style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText >
                        <Typography variant="p" align="center" fontFamily="DM Sans" fontWeight="400" fontSize="18px">
                            Credits
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, ml: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Box
                    component="nav"
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '1080px', backgroundColor: '#04263A' },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '1080px', backgroundColor: '#04263A' },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>


                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 1, backgroundColor: '#F5F6FA', ml: { sm: `${drawerWidth}px` } }}
                >
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between",width: "100%" }}>
                        <Typography variant="permanent" color="black" fontFamily="DM Sans" fontWeight="700" fontSize="28px"  sx={{ m: 4, }}>
                            Oura_Study
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row" , alignItems: "center" ,mr:2}}>
                            <FaIcon.FaUserCircle style={{ color:"#2CA9E3",fontSize: '28px', margin: '20px' }} />
                            <Typography fontFamily="DM Sans" fontWeight="500" fontSize="16px">Ankit Brijwasi</Typography>
                            <RiIcon.RiArrowDropDownLine  style={{ color:"black",fontSize: '28px',}}/>
                        </Box>

                    </Box>


                    <HorizontalStepper />
                    {montage.currentStep ===0 && <FileSelector />}
                    {montage.currentStep ===1  && <MapChannels/>}
                    {montage.currentStep ===2 && <PreviewConfig/>}
                    <BottomNavbar />
                </Box>
            </Box>
        </>
    );
}

export default ResponsiveDrawer;