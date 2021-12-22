import React, {useEffect} from 'react';
import {DateRangePickerView} from "../date-range-picker-view/DateRangePickerView";
import './date-range-picker-wrapper.css'
import {Button, Popover} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setDatePickerOpen} from "../../store/features/date-picker-open/datePickerOpenSlice";
import {MONTH_NAMES} from "../../constants/date-names";
import {ReactComponent as IconCalendar} from "../../images/icons/ic_calendar.svg";
import {neutralButtonTheme} from "../../constants/mui-themes";
import {ThemeProvider} from "@emotion/react";
import {setFromRange, setToRange} from "../../store/features/range/rangeSlice";
import {DateService} from "../../services/date-service/dateService";
import {setActiveTab} from "../../store/features/active-tab/activeTabSlice";

export const DateRangePickerWrapper = () => {
  const dispatch = useDispatch();
  const isDatePickerOpen = useSelector((state) => state.isDatePickerOpen);
  const dateRange = useSelector((state) => state.dateRange);

  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    dispatch(setFromRange(DateService.getToday().getTime()));
    dispatch(setToRange(DateService.getToday().getTime()));
    dispatch(setActiveTab('today'));
  }, [dispatch]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setDatePickerOpen(true));
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(setDatePickerOpen(false));
  };

  const id = isDatePickerOpen ? 'simple-popover' : undefined;

  const getConvertedRange = () => {
    const dateFrom = new Date(dateRange.from);
    const dateTo = new Date(dateRange.to);
    let convertedRange;

    const getMonthWithDate = (date) => {
      return MONTH_NAMES?.short[date.getMonth()] + ' ' + date.getDate();
    }

    const getFullYear = (date) => {
      return getMonthWithDate(date) + ', ' + date.getFullYear();
    }

    const getYear = (date_from, date_to) => {
      return getMonthWithDate(date_from) + ' - ' + getMonthWithDate(date_to) + ', ' + date_to.getFullYear();
    }

    if (dateFrom.getFullYear() !== dateTo.getFullYear() && dateRange.to) {
      convertedRange = getFullYear(dateFrom) + ' - ' + getFullYear(dateTo);
    } else if (dateFrom.getDate() === dateTo.getDate() || !dateRange.to) {
      convertedRange = getFullYear(dateFrom);
    } else {
      convertedRange = getYear(dateFrom, dateTo);
    }

    return convertedRange;
  }

  return (
    <ThemeProvider theme={neutralButtonTheme}>
      <div className="date-range-picker-wrapper">
        <div className="flex items-center">

          <Button
            aria-describedby={id}
            onClick={handleClick}
            variant="text"
            color="neutral"
            className="normal-case"
          >
            <IconCalendar className="mr-3"/>
            {getConvertedRange()}
          </Button>
        </div>

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
    </ThemeProvider>
  );
};
