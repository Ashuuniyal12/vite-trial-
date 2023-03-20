import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOptions, setBackupReq } from '../../features/montages/MontagesSlice'
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
    const [hidden, setHidden] = useState([]);
    const [backup, setBackup] = useState({});

    useEffect(() => {
        setSelectedOption(montage)
    }, [])

    useEffect(() => {
        dispatch(setOptions(selectedOption))
    }, [selectedOption])

    const deleteBackUpChannel = (event) => {
        const run = () => {
            const channelName = event;

            setSelectedOption(prevState => {
                return {
                    ...prevState,
                    [channelName]: {
                        ...prevState[channelName],
                        primarybackup: "",
                        refrencebackup: "",
                    }
                }

            });
        }
        run();
        dispatch(setOptions(selectedOption))
    }

    const handleChangePrimary = (event) => {
        const submit = () => {
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
        }
        submit();
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

    };

    const handleChangePrimaryBackup = (event) => {
        const submit = () => {
            const channelName = event.target.id;
            const newValue = event.target.value;
            setSelectedOption(prevState => {
                return {
                    ...prevState,
                    [channelName]: {
                        ...prevState[channelName],

                        primarybackup: [newValue]
                    }
                }

            });
        }
        submit();

    }

    const handleChangeRefrenceBackup = (event) => {
        const channelName = event.target.id;
        const newValue = event.target.value;
        setSelectedOption(prevState => {
            return {
                ...prevState,
                [channelName]: {
                    ...prevState[channelName],
                    refrencebackup: newValue
                }
            }
        });
        dispatch(setOptions(selectedOption))


    }

    const showHidden = (event) => {
        let flag = false;
        var i;
        for (i = 0; i < hidden.length; i++) {
            if (hidden[i] === event) {
                flag = true;
                break;
            }
        }
        if (flag) {
            hidden.splice(i, 1);
            setHidden([...hidden]);
        } else {
            setHidden([...hidden, event]);
        }
    }

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

            {demmoData.channels.map((item, i) => {
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
                                value={selectedOption[item]?.refrence || "null"}
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
                                <Typography onClick={() => showHidden(i)} variant="p" sx={{ color: '#2F7EC7', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} > {hidden.includes(i) ? "Hide BackUp Channles" : selectedOption[item]?.primarybackup || selectedOption[item]?.refrencebackup ? "View BackUp Channels" : "+ Add BackUp Channels"}</Typography>
                            </Button>

                        </Box>

                        {hidden.includes(i) && (
                            <Box
                                sx={{
                                    height: "20", width: "96%", backgroundColor: "#F6F6F6", borderRadius: "5px", alignItems: "center", justifyContent: "center", display: 'flex', mx: 2, flexDirection: "column"
                                }}
                            >

                                <Box
                                    sx={{
                                        height: "100px", width: "96%", backgroundColor: "#F6F6F6", borderRadius: "5px", alignItems: "center", justifyContent: "center", display: 'grid',
                                        gridTemplateColumns: '25% 25% 25% 25%', mx: 2
                                    }}
                                >
                                    <div style={{ color: "#F6F6F6" }}>df</div>
                                    <select style={{ padding: "12px", borderRadius: "5px", border: "1px solid #E5E5E5", width: "70%", fontFamily: "DM Sans", fontSize: "16px", fontWeight: "400", color: "#959595" }}
                                        required={true}
                                        id={item}
                                        className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                                        type="string"
                                        value={selectedOption[item]?.primarybackup || "null"}
                                        onChange={handleChangePrimaryBackup}
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
                                        value={selectedOption[item]?.refrencebackup || "null"}
                                        onChange={handleChangeRefrenceBackup}
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

                                    <Button variant='text' component="span" onClick={() => deleteBackUpChannel(item)}
                                        sx={{ color: "#959595" }}>
                                        <RiIConn.RiDeleteBinLine style={{ color: "#E03A3A", fontSize: '16px', margin: '10px' }} />
                                        <Typography variant="p" sx={{ color: '#E03A3A', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} > Delete</Typography>
                                    </Button>

                                </Box>

                            </Box>


                        )}
                    </>
                )
            })}

            <Box
                sx={{
                    height: "100px", width: "96%", backgroundColor: "white", borderRadius: "5px", alignItems: "center", justifyContent: "start ", display: 'flex',gap: "40px",
                    flexDirection: "row", my: 2, mx: 2 ,px:2
                }}
            >
                <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "18px", fontWeight: '500', textTransform: 'capitalize', textAlign: "center", ml : 2}} >Additonal Settings
                </Typography>

                {Object.keys(demmoData.optionals[0]).map((item) => {
                    console.log(item);
                    let value = demmoData.optionals[item];
                    return (
                        <div>
                            <input type="checkbox" id={item} name={item} value={value} defaultChecked />
                            <label for={item}>{item}</label>
                        </div>
                    )
                })}
            </Box>
        </div>
    )
}

export default MapChannels
