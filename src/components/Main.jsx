import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GetWord, SetWordKnownFalse } from '../Redux/AppReducer';
import { styled } from '@mui/material/styles';
import { Card, Typography, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';

const ColorButton = styled(LoadingButton)(({ theme }) => ({
  color: '#000',
  backgroundColor: '#f3ca20',
  '&:hover': {
    color: '#000',
    backgroundColor: '#e8ca51',
  },
  '&:active': {
    color: '#000',
    backgroundColor: '#b5971f',
  },
  '&:disabled': {
    backgroundColor: '#333',
    color: '#f3ca20',
  },
}));
const Main = (props) => {
  const translate = props.translate.split('.');

  return (
    <Box
      sx={{
        width: '300px',
        margin: '0 auto',
      }}
    >
      <Box sx={{ mt: 25 }}>
        <Box>
          <ColorButton
            disabled={false}
            color='primary'
            variant='contained'
            onClick={props.GetWord}
            sx={{ m: 2 }}
          >
            next
          </ColorButton>
          <ColorButton
            disabled={false}
            variant='contained'
            onClick={props.SetWordKnownFalse}
            sx={{ m: 2 }}
          >
            translate
          </ColorButton>
        </Box>
        <Box>
          <Typography>
            {props.WordKnown ? (
              <Typography component={'h2'} variant={'h2'}>
                {props.word}
              </Typography>
            ) : (
              <Typography component={'h4'} variant={'h4'}>
                {props.word}
              </Typography>
            )}
          </Typography>
        </Box>
        <Box>
          <Typography component={'h5'} variant={'h5'}>
            {!props.WordKnown && translate[0]}
          </Typography>
        </Box>
        <Box>
          <Typography component={'h5'} variant={'h5'}>
            {!props.WordKnown && translate[1]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
const MapStateToProps = (state) => {
  return {
    word: state.app.word,
    translate: state.app.translate,
    WordKnown: state.app.WordKnown,
  };
};
export default connect(MapStateToProps, { GetWord, SetWordKnownFalse })(Main);
