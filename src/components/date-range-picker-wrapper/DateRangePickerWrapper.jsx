import React from 'react';
import {DateRangePickerView} from "../date-range-picker-view/DateRangePickerView";
import './date-range-picker-wrapper.css'
import {Button, Popover} from "@mui/material";

export const DateRangePickerWrapper = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="date-range-picker-wrapper">
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Will be show selected range
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <DateRangePickerView/>
      </Popover>
    </div>
  );
};
