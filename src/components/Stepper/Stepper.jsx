import * as React from 'react';
import{ Box }from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSelector} from 'react-redux';

const steps = [
  'Upload EDFs',
  'Map Channels',
  'Save & Preview',
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#10A44B',
    },
  },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '& .Mui-completed': {
            color: '#10A44B',
          },
          '& .Mui-active': {
            fill: '#10A44B',
          },
        },
        label: {
          '&.Mui-completed.MuiStepLabel-alternativeLabel': {
            fontWeight: 600,
            color: '#10A44B',
          },
          '&.Mui-active.MuiStepLabel-alternativeLabel': {
            fontWeight: 400,
            borderRadius: '5px',
          },
        },
      },
    },
  },
});

export default function HorizontalStepper() {
  const montageCount = useSelector((state) => state.montage.currentStep);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '96%', borderRadius: '5px', my: 4, mx: 2, p: 2, backgroundColor: 'white' }}>
        <Stepper activeStep={montageCount} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </ThemeProvider>
  );
}
