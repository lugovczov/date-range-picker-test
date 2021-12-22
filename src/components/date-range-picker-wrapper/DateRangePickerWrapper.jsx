import React from 'react';
import {DateRangePickerView} from "../date-range-picker-view/DateRangePickerView";
import './date-range-picker-wrapper.css'
import {Button, Popover} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setDatePickerOpen} from "../../store/features/date-picker-open/datePickerOpenSlice";

export const DateRangePickerWrapper = () => {
  const dispatch = useDispatch();
  const isDatePickerOpen = useSelector((state) => state.isDatePickerOpen);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setDatePickerOpen(true));
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(setDatePickerOpen(false));
  };

  const id = isDatePickerOpen ? 'simple-popover' : undefined;

  return (
    <div className="date-range-picker-wrapper">
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Will be show selected range

        {/*  TODO set active range */}
      </Button>

      <Popover
        id={id}
        open={isDatePickerOpen}
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
