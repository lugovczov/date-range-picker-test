import React from 'react';
import {DAY_NAMES, MONTH_NAMES} from "../../constants/date-names";
import './month-picker.css'
import {DateService} from "../../services/date-service/dateService";
import {useDispatch, useSelector} from "react-redux";
import {Day} from "../day/Day";
import {setFromRange, setToRange} from "../../store/features/range/rangeSlice";
import {setActiveTab} from "../../store/features/active-tab/activeTabSlice";

export const MonthPicker = ({ date }) => {
  const dispatch = useDispatch();

  const month = new Date(date);
  const daysInMonth = DateService.getDaysInMonth(month);
  const dateRange = useSelector((state) => state.dateRange);

  const getEmptyBlocks = () => {
    const startWeek = month.getDay();

    return (
      [...Array(startWeek)].map((day, index) => {
        return (
          <Day empty={true} key={`empty-${index}`}/>
        )
      })
    )
  }

  const handleClickDay = (date) => {

    if (dateRange.from && !dateRange.to) {
      if (date < dateRange.from) {
        dispatch(setToRange(dateRange.from));
        return dispatch(setFromRange(date));
      } else {
        return dispatch(setToRange(date));
      }

      // TODO close picker
    }

    dispatch(setActiveTab(null));

    dispatch(setFromRange(date));
    dispatch(setToRange(null));
  }

  const getDayClasses = (date) => {
    // available classes:
      // active
      // disabled
      // first
      // last
      // intermediate

    const dayClasses = {};

    if (dateRange?.from < date && date < dateRange?.to) {
      dayClasses.active = true;
    }

    if (dateRange?.from === date && dateRange.to) {
      dayClasses.first = true;
      dayClasses.active = true;
    }

    if (dateRange?.from === date && !dateRange.to) {
      dayClasses.intermediate = true;
    }

    if (date === dateRange?.to) {
      dayClasses.last = true;
      dayClasses.active = true;
    }

    if (date > DateService.getToday()) {
      dayClasses.disabled = true;
    }

    return dayClasses;
  }

  const getDays = () => {
    return (
      [...Array(daysInMonth)].map((day, index) => {
        const date = DateService.getDay(month, index + 1).getTime();

        const dayClasses = getDayClasses(date);

        return (
          <Day key={date}
               value={index + 1}
               classes={dayClasses}
               handleClick={() => handleClickDay(date)}
          />
        )
      }))
  };

  return (
    <div className="month-picker mx-4">
      <div
        className="month-picker__title w-full text-center text-black font-medium text-lg mt-0"
      >
        {MONTH_NAMES?.full[month?.getMonth()] + " " + month?.getFullYear()}
      </div>

      <div className="month-picker__days-week grid grid-cols-7 w-full">
        {DAY_NAMES?.short.map(day => {
          return (
            <p className="day-week grid-item w-full" key={day}>
              {day}
            </p>
          )
        })}
      </div>

      <div className="month-picker__days grid grid-cols-7">
        {getEmptyBlocks()}
        {getDays()}
      </div>
    </div>
  );
};
