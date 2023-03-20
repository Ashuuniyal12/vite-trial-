import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useSelector , useDispatch} from 'react-redux';
import { decrementCount, incrementCount, clearData } from '../../features/montages/MontagesSlice';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '80px',
    width: '100%',
    marginTop: "2rem",
    backgroundColor: 'white',
    // position: 'fixed',
    bottom: 0,
  },
});

export default function BottomNavbar() {

  const dispatch = useDispatch();

  const montage = useSelector((state) => state.montage.data);
  console.log(montage.edf===null)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Box
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>

        <Box sx={{ ml: 2 }}>
          <Button variant='outlined' component="span" onClick={() => { dispatch(decrementCount())}}
            sx={{ backgroundColor: 'white', color: "#959595", px: '55px', py: "15px", mt: "20px", border: "1px solid #959595" }}>
            <Typography variant="p" sx={{ color: '#959595', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '400', textTransform: 'capitalize' }} >Back</Typography>
          </Button>
          <Button variant='text' component="span" onClick={() => { dispatch(clearData())}}
            sx={{ color: "#959595", px: '35px', mt: "20px" }}>
            <Typography variant="p" sx={{ color: '#959595', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} >Cancle Montage</Typography>
          </Button>
        </Box>

        <Box sx={{ mr: 2 }}>
          <Button variant='contained' component="span" disabled={montage.edf === null} onClick={() => { dispatch(incrementCount())}}
            sx={{
              backgroundColor: '#2F7EC7', color: "white", alignItems: "end", justifyItems: "end", px: '55px', py: "15px", mt: "20px", "&.Mui-disabled": {
                background: "#9BC4EA",
              }
            }}>
            <Typography variant="p" sx={{ color: 'white', fontFamily: "DM Sans", fontSize: "14px", fontWeight: '500', textTransform: 'capitalize' }} >Next</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
