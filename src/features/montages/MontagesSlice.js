import { createSlice } from '@reduxjs/toolkit'

export const MontageSlice = createSlice({

  name: 'montage',
  initialState: {
    data: {
      edf: null,
    },
    currentStep: 0,
    // selectedOption: {
    //   'channel-1': { primary: 'Body temperature (BT)', refrence: 'Photoplethysmography (PPG)' ,primarybackpu: ['Body temperature (BT)','Photoplethysmography (PPG)'], refrencebackup: ['Body temperature (BT)','Photoplethysmography (PPG)'] , counter : 1},
    //   'channel-2': {primary: 'Electrodermal activity (EDA)',refrence: 'GSR (galvanic skin response)'}
    // },
    selectedOption:{},
    loading: false,
    error: null,
  },
  reducers: {
    setBackupReq: (state, action) => {
      console.log("Called setBackupCount");
      console.log("payload",action.payload);
      state.backupCount = action.payload
    },
    edfUploadReq: (state, action) => {
      console.log(action.payload)
      state.data.edf = action.payload
    },
    incrementCount: (state) => {
      console.log("Called incrementCount");
      if (state.currentStep <= 2) {
        state.currentStep += 1;
      }
    },
    decrementCount: (state) => {
      console.log("Called decrementCount");
      if(state.currentStep > 0){
      state.currentStep -= 1;}
    },
    clearData: (state) => {
      console.log("Called clearData");
      state.data.edf = null
      state.selectedOption = []
      localStorage.clear()
      state.currentStep = 0;
    },
    setOptions: (state, action) => {
      console.log("Called setOptions");
      console.log("payload",action.payload);
      state.selectedOption = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { edfUploadReq, incrementCount, decrementCount, clearData,setOptions ,setBackupReq} = MontageSlice.actions

export default MontageSlice.reducer