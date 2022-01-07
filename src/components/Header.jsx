import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Typography, CardContent } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import theme from './../theme';

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger} theme={theme}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <SettingsIcon />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};
const MapStateToProps = (state) => {
  return {};
};
export default connect(MapStateToProps, {})(Header);
