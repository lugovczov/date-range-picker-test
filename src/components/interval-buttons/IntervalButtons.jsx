import React from 'react';
import {DateService} from "../../services/date-service/dateService";
import {Button} from "@mui/material";
import {ReactComponent as ArrowLeftIcon} from "../../images/icons/ic_angle-left.svg";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/ic_angle-right.svg";
import {setFromRange, setToRange} from "../../store/features/range/rangeSlice";
import {setActiveTab} from "../../store/features/active-tab/activeTabSlice";
import {useDispatch, useSelector} from "react-redux";

export const IntervalButtons = () => {
  const dispatch = useDispatch();

  const dateRange = useSelector((state) => state.dateRange);

  const setInterval = (event, fromDate, toDate) => {
    event.stopPropagation();

    dispatch(setFromRange(fromDate));
    dispatch(setToRange(toDate));

    dispatch(setActiveTab(null));
  }

  const getButtonPrevInterval = () => {
    const startDate = DateService.getStartDay().getTime();
    const oneDay = 86400000;

    const toDate = dateRange.from - oneDay;
    const fromDate = toDate - (dateRange.to - dateRange.from);

    const disabled = fromDate < startDate || !dateRange.to;

    return (
      <Button
        onClick={(event) => setInterval(event, fromDate, toDate)}
        className="flex h-8 w-8 p-0 min-w-0"
        variant="icon"
        disabled={disabled}
      >
        <ArrowLeftIcon className="w-3 h-3"/>
      </Button>
    );
  }

  const getButtonNextInterval = () => {
    const lastDate = DateService.getToday().getTime();
    const oneDay = 86400000;

    const fromDate = dateRange.to + oneDay;
    const toDate = fromDate + (dateRange.to - dateRange.from);

    const disabled = toDate > lastDate || !dateRange.to;

    return (
      <Button
        onClick={(event) => setInterval(event, fromDate, toDate)}
        className="flex h-8 w-8 p-0 min-w-0"
        variant="icon"
        disabled={disabled}
      >
        <ArrowRightIcon className="w-3 h-3"/>
      </Button>
    );
  }

  return (
    <React.Fragment>
      {getButtonPrevInterval()}
      {getButtonNextInterval()}
    </React.Fragment>
  );
};
