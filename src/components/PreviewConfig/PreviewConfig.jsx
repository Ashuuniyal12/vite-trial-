import { Box, Typography, Button, Divider, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material'
import { fontFamily, minHeight } from '@mui/system';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import demmoData from '../../data/demo.json'
import { showPageTwo } from '../../features/montages/MontagesSlice';

const PreviewConfig = () => {

    const dispatch = useDispatch();
    const montage = useSelector((state) => state.montage.selectedOption);
    const currentStep = useSelector((state) => state.montage.currentStep);
    return (
        <div>
            <Box
                sx={{
                    height: "63px", width: "96%", backgroundColor: "#E5F3FF", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'grid',
                    gridTemplateColumns: '25% 25% 50%', my: 2, mx: 2
                }}
            >
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize', textAlign: "center" }} >Channel
                </Typography>
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} > Primary Channel
                </Typography>
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >Reference Channel
                </Typography>
            </Box>

            {demmoData.channels.map((item, i) => {
                if (montage[item]?.primary || montage[item]?.primarybackup || montage[item]?.refrence || montage[item]?.refrencebackup) {
                    return (
                        <Box
                            sx={{
                                height: "250px", width: "96%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'grid',
                                gridTemplateColumns: '80% 20%', my: 2, mx: 2
                            }}
                        >

                            <Box
                                sx={{
                                    height: "100%", width: "100%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'flex', flexDirection: "column", my: 2, mx: 0
                                }}
                            >
                                {/* <Box
                                    sx={{
                                        width: "100%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'flex', flexDirection: "row", my: 2, mx: 2
                                    }}
                                >
                                    <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{item}
                                    </Typography>
                                    <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.primary || "NULL"}
                                    </Typography>
                                    <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.refrence || "NULL"}
                                    </Typography>
                                </Box> */}


                                {/* <Divider sx={{ width: '100%', margin: 'auto', height: "2px", backgroundColor: "#EBEBEB" }} />

                                <Box
                                    sx={{
                                        width: "100%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'flex', flexDirection: "row", my: 2, mx: 2
                                    }}
                                >
                                    <Typography variant="p" sx={{ color: '#8A8A8A', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >BackUp Channels
                                    </Typography>
                                    <Typography variant="p" sx={{ color: '#8A8A8A', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.primarybackup || "NULL"}
                                    </Typography>
                                    <Typography variant="p" sx={{ color: '#8A8A8A', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.refrencebackup || "NULL"}
                                    </Typography>
                                </Box> */}

                                <TableContainer component={Paper} sx={{ minHeight: "100%" }}>
                                    <Table sx={{ minWidth: "100%", minHeight: "100%" }} size="small" aria-label="a dense table">
                                        <TableHead
                                            sx={{ height: "80px" }}
                                        >
                                            <TableRow>
                                                <TableCell sx={{
                                                    borderRight: '1px solid #EBEBEB',
                                                    width: "33.3%",
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '700',
                                                }} align="center">{item}</TableCell>
                                                <TableCell sx={{
                                                    width: "33.3%",
                                                    borderRight: '1px solid #EBEBEB',
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '700',
                                                }} align="center">{montage[item]?.primary || "NULL"}</TableCell>
                                                <TableCell sx={{
                                                    width: "33.3%",
                                                    borderRight: '1px solid #EBEBEB',
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '700',
                                                }} align="center">{montage[item]?.refrence || "NULL"}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {(montage[item]?.primarybackup || montage[item]?.refrencebackup) && <TableBody>
                                            <TableRow>
                                                <TableCell sx={{
                                                    width: "33.3%",
                                                    borderRight: '1px solid #EBEBEB',
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '500',
                                                    color: "#8A8A8A"
                                                }} align="center">BackUp Channels</TableCell>
                                                <TableCell sx={{
                                                    width: "33.3%",
                                                    borderRight: '1px solid #EBEBEB',
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '500',
                                                    color: "#8A8A8A"
                                                }} align="center">{montage[item]?.primarybackup || "NULL"}</TableCell>
                                                <TableCell sx={{
                                                    width: "33.3%",
                                                    borderRight: '1px solid #EBEBEB',
                                                    fontFamily: "DM Sans",
                                                    fontSize: "18px",
                                                    fontWeight: '500',
                                                    color: "#8A8A8A"
                                                }} align="center">{montage[item]?.refrencebackup || "NULL"}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                        }
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box
                                sx={{
                                    height: "100%", width: "100%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'flex', flexDirection: "column", my: 2, mx: 0,
                                }}
                            >
                                {<Button variant='outlined' component="span" onClick={() => { dispatch(showPageTwo()) }} disabled={currentStep === 3 || currentStep === 4}
                                    sx={{ backgroundColor: 'white', color: "#2F7EC7", px: '35px', py: "15px", mt: "20px", border: "1px solid #2F7EC7" }}>
                                    <Typography variant="p" color={currentStep === 3 || currentStep === 4 ? "gray" : "#2F7EC7"} sx={{ fontFamily: "DM Sans", fontSize: "14px", fontWeight: '400', textTransform: 'capitalize' }} >Edit Channel</Typography>
                                </Button>}
                            </Box>

                        </Box>)
                }
            })}
            <Box
                sx={{
                    height: "80px", width: "96%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "start", display: 'flex', flexDirection: "row", my: 2, mx: 2
                }}
            >
                <Typography variant="p" sx={{ mx: 2, color: '#8A8A8A', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '600', textTransform: 'capitalize' }} >Output Format:
                </Typography>
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '600', textTransform: 'capitalize' }} >Wanombi.xml
                </Typography>

            </Box>
        </div>
    )
}
export default PreviewConfig
