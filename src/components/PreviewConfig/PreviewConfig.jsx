import { Box, Typography ,Button} from '@mui/material'
import React from 'react'
import { useSelector ,useDispatch  } from 'react-redux';
import demmoData from '../../data/demo.json'
import {showPageTwo} from '../../features/montages/MontagesSlice';

const PreviewConfig = () => {

    const dispatch = useDispatch();
    const montage = useSelector((state) => state.montage.selectedOption);
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
                if(montage[item]?.primary ||montage[item]?.primarybackup ||montage[item]?.refrence||montage[item]?.refrencebackup){
                return (<>
                    <Box
                        sx={{
                            height: "250px", width: "96%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'flex',flexDirection: "row", my: 2, mx: 2
                        }}
                    >
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{item}
                            </Typography>
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.primary|| "NULL"}
                            </Typography>
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.refrence || "NULL"}
                            </Typography>
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.primarybackup|| "NULL"}
                            </Typography>
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >{montage[item]?.refrencebackup || "NULL"}
                            </Typography>
                            <Button variant='outlined' component="span" onClick={() => { dispatch(showPageTwo())}}
                                sx={{ backgroundColor: 'white', color: "#2F7EC7", px: '55px', py: "15px", mt: "20px", border: "1px solid #2F7EC7" }}>
                            <Typography variant="p" sx={{ color: '#2F7EC7', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '400', textTransform: 'capitalize' }} >Edit Channel</Typography>
                            </Button>
                         
                    </Box>
                </>)
                }
            })}
        </div>
    )
}

export default PreviewConfig
