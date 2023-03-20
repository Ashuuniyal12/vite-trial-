import {Box} from '@mui/material';
import { useEffect, useState } from 'react';
import edf from '../../assets/images/edf.png';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import { edfUploadReq } from '../../features/montages/MontagesSlice';

function FileSelector() {

  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const fileData = localStorage.getItem('selectedFile');

    // Log file to console
    console.log(fileData);
    // Convert file data back to file object
    const file = new File([fileData], 'selectedFile');
    // Set file object to state
    setSelectedFiles(file);

  }, [])

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const filesArray = Array.from(e.dataTransfer.files);
    setSelectedFiles(filesArray);
    console.log(filesArray[0]);

    // Save file reference in local storage
    localStorage.setItem('selectedFile', JSON.stringify(filesArray[0]));

    // Dispatch action with file reference
    dispatch(edfUploadReq({ fileRef: 'selectedFile' }));
  };

  const handleBrowse = (e) => {
    const choosenFile = e.target.files[0];
    setSelectedFiles(choosenFile);

    // Store file in local storage
    const fileReader = new FileReader();
    fileReader.readAsDataURL(choosenFile);
    fileReader.onload = () => {
      localStorage.setItem('selectedFile', fileReader.result);
    };

    // Dispatch action with file reference
    dispatch(edfUploadReq({ fileRef: 'selectedFile' }));
  };

  return (
    <Box sx={{ backgroundColor: 'white', p: '20px', borderRadius: '10px', mx: 2 }}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{ border: '2px dashed #ccc', p: '100px', backgroundColor: '#F8F8F8' }}
      >
        <img src={edf} alt="" width="150px" />
        <input
          type="file"
          hidden
          onChange={(e) => {
            handleBrowse(e);
          }}
          id="file-selector"
        />
        <label htmlFor="file-selector">
          <Button variant='outlined' component="span"
            sx={{ backgroundColor: '#EAEAEA', color: "#6D6D6D", px: '35px', border: "2px solid #6D6D6D" }}>
            <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} >Browse Files</Typography>
          </Button>
        </label>
        <Typography variant="p" sx={{ color: '#0F0F0F', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500' }} >or drop files here</Typography>
       {selectedFiles.size> 6 && <List>
          <ListItem key={selectedFiles.name}>
            <ListItemText primary={`${selectedFiles.name} - ${selectedFiles.size} bytes`} />
          </ListItem>
        </List>
       }
      </Stack>
    </Box>
  );
}

export default FileSelector;
