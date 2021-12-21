import React from 'react';
import {TAB_NAMES} from "../../constants/date-names";
import {Button, createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import './range-tab-item.css'

export const RangeTabItem = ({ id, handleClick, active }) => {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#000000DE',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => handleClick()}
        className={`rounded text-sm px-3 h-11 w-32 ${active ? 'range-tab-item--active' : ''}`}
        variant="text"
        color="neutral"
      >
        <p className="w-full text-left normal-case">
          {TAB_NAMES[id] ? TAB_NAMES[id] : ''}
        </p>
      </Button>
    </ThemeProvider>
  );
};
