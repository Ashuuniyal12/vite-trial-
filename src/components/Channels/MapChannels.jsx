import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOptions } from '../../features/montages/MontagesSlice'
import { Box, Button, Typography } from '@mui/material'
import demmoData from '../../data/demo.json'
import *as RiIConn from 'react-icons/ri'

const names = [
    "Heart rate (HR)",
    "Heart rate variability (HRV)",
    "Respiratory rate (RR)",
    "Body temperature (BT)",
    "Blood oxygen saturation (SpO2)",
    "Electrodermal activity (EDA)",
    "Photoplethysmography (PPG)",
    "ECG (electrocardiography)",
    "EMG (electromyography)",
    "EEG (electroencephalography)",
    "GSR (galvanic skin response)",
    "Blood volume pulse (BVP)",
    "Inertial measurement unit (IMU)",
    "NULL",
    "NA"
];

const MapChannels = () => {
    const dispatch = useDispatch();
    const montage = useSelector((state) => state.montage.selectedOption);
    const [selectedOption, setSelectedOption] = useState({});
    

    useEffect(() => {
        setSelectedOption(montage)
    }, [])
    const handleChangePrimary = (event) => {
        const channelName = event.target.id;
        const newValue = event.target.value;
        setSelectedOption(prevState => {
            return {
                ...prevState,
                [channelName]: {
                    ...prevState[channelName],
                    primary: newValue
                }
            }
        });
        dispatch(setOptions(selectedOption))
        console.log("selectedOption", selectedOption)
    }

    const handleChangeRefrence = (event) => {
        const channelName = event.target.id;
        const newValue = event.target.value;
        setSelectedOption(prevState => {
            return {
                ...prevState,
                [channelName]: {
                    ...prevState[channelName],
                    refrence: newValue
                }
            }
        });
        dispatch(setOptions(selectedOption))
        console.log("selectedOption", selectedOption)

    };


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
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} > Primary Channel (default select)
                </Typography>
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize' }} >Reference Channel (default N/A)
                </Typography>
            </Box>

            {demmoData.channels.map((item) => {
                return (
                    <>
                        <Box
                            sx={{
                                height: "100px", width: "96%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "space-around", display: 'grid',
                                gridTemplateColumns: '25% 25% 25% 25%', mt: 2, mx: 2
                            }}
                        >
                            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '400', textTransform: 'capitalize', textAlign: "center" }} >{item}
                            </Typography>

                            <select style={{ padding: "12px", borderRadius: "5px", border: "1px solid #E5E5E5", width: "70%", fontFamily: "DM Sans", fontSize: "16px", fontWeight: "400", color: "#959595" }}
                                required={true}
                                id={item}
                                className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                                type="string"
                                value={selectedOption[item]?.primary || "null"}
                                onChange={handleChangePrimary}
                            >
                                <option value="null">
                                    Select Channel
                                </option>
                                {names.map((name) => {
                                    return (
                                        <option value={name}>{name}</option>
                                    )
                                })}
                            </select>

                            <select style={{ padding: "12px", borderRadius: "5px", border: "1px solid #E5E5E5", width: "70%", fontFamily: "DM Sans", fontSize: "16px", fontWeight: "400", color: "#959595" }}
                                required={true}
                                id={item}
                                type="string"
                                // value={selectedOption[item]?.refrence || "null"}
                                onChange={handleChangeRefrence}
                            >
                                <option value="null">
                                    Select Channel
                                </option>
                                {names.map((name) => {
                                    return (
                                        <option value={name}>{name}</option>
                                    )
                                })}
                            </select>

                            <Button variant='text' component="span"
                                sx={{ color: "#959595" }}>
                                <Typography variant="p" sx={{ color: '#2F7EC7', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} > + Add Backup Channles</Typography>
                            </Button>



                        </Box>

                        <Box
                            sx={{
                                height: "100px", width: "96%", backgroundColor: "#F6F6F6", borderRadius: "5px", alignItems: "center", justifyContent: "center", display: 'grid', 
                                gridTemplateColumns: '25% 25% 25% 25%', mx: 2
                            }}
                        >
                            <div style={{color: "#F6F6F6"}}>df</div>
                            <select style={{ padding: "12px", borderRadius: "5px", border: "1px solid #E5E5E5", width: "70%", fontFamily: "DM Sans", fontSize: "16px", fontWeight: "400", color: "#959595" }}
                                required={true}
                                id={item}
                                className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                                type="string"
                                // value={selectedOption[item]?.primaryBackup || "null"}
                                onChange={handleChangePrimary}
                            >
                                <option value="null">
                                    Select Channel
                                </option>
                                {names.map((name) => {
                                    return (
                                        <option value={name}>{name}</option>
                                    )
                                })}
                            </select>

                            <select style={{ padding: "12px", borderRadius: "5px", border: "1px solid #E5E5E5", width: "70%", fontFamily: "DM Sans", fontSize: "16px", fontWeight: "400", color: "#959595" }}
                                required={true}
                                id={item}
                                type="string"
                                // value={selectedOption[item]?.refrenceBackup || "null"}
                                onChange={handleChangeRefrence}
                            >
                                <option value="null">
                                    Select Channel
                                </option>
                                {names.map((name) => {
                                    return (
                                        <option value={name}>{name}</option>
                                    )
                                })}
                            </select>
                            
                            <Button variant='text' component="span"
                                sx={{ color: "#959595" }}>
                                <RiIConn.RiDeleteBinLine style={{ color: "#E03A3A", fontSize: '16px', margin: '10px' }}  />
                                <Typography variant="p" sx={{ color: '#E03A3A', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} > Delete</Typography>
                            </Button>

                        </Box>
                    </>
                )
            })}
        </div>
    )
}

export default MapChannels
