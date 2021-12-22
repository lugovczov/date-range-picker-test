import React, {useEffect} from 'react';
import {RangeTabs} from "../range-tabs/RangeTabs";
import './date-range-picker-view.css'
import {useDispatch, useSelector} from "react-redux";
import {MonthPicker} from "../month-picker/MonthPicker";
import {
  setLeftMonth, setRightMonth
} from "../../store/features/active-months/activeMonthsSlice";
import {DateService} from "../../services/date-service/dateService";
import {DECREMENT, DOUBLE, INCREMENT} from "../../constants/date-operators";
import {ButtonChangeMonth} from "../button-change-month/ButtonChangeMonth";

export const DateRangePickerView = () => {
  const dispatch = useDispatch();
  const activeMonths = useSelector((state) => state.activeMonths);

  useEffect(() => {
    const today = new Date();
    const prevMonth = DateService.getPrevOrNextMonth(today, DECREMENT)

    dispatch(setLeftMonth(prevMonth.getTime()));
    dispatch(setRightMonth(today.getTime()));
  }, [dispatch]);

  const handleClickButton = (type, double) => {
    const leftMonth = DateService.getPrevOrNextMonth(new Date(activeMonths.left), type, double).getTime();
    const rightMonth = DateService.getPrevOrNextMonth(new Date(activeMonths.right), type, double).getTime();

    dispatch(setLeftMonth(leftMonth));
    dispatch(setRightMonth(rightMonth));
  };

  const getDecrementButton = (type, double) => {
    const startDate = DateService.getStartDay().getTime();
    const prevMonth = DateService.getPrevOrNextMonth(new Date(activeMonths.left), type, double).getTime();

    const disabled = prevMonth < startDate;

    return (
      <ButtonChangeMonth type={DECREMENT} double={double} handleClick={handleClickButton}
                         disabled={disabled}/>
    )
  }

  const getIncrementButton = (type, double) => {
    const today = DateService.getToday().getTime();
    const nextMonth = DateService.getPrevOrNextMonth(new Date(activeMonths.right), type, double).getTime();

    const disabled = nextMonth > today;

    return (
      <ButtonChangeMonth type={INCREMENT} double={double} handleClick={handleClickButton}
                         disabled={disabled}/>
    )
  }

  return (
    <div className="date-range-picker-view flex">
      <div className="flex-auto main-part py-4">
        <div className="drpw-buttons flex justify-between absolute w-full px-4">
          <div className="flex">
            {getDecrementButton(DECREMENT)}
            {getDecrementButton(DECREMENT, DOUBLE)}
          </div>
          <div className="flex">
            {getIncrementButton(INCREMENT, DOUBLE)}
            {getIncrementButton(INCREMENT)}
          </div>
        </div>
        <div className="month-container grid grid-cols-2">
          <MonthPicker date={activeMonths.left}/>
          <MonthPicker date={activeMonths.right}/>
        </div>
      </div>

      <div className="flex-none right-part">
        <RangeTabs/>
      </div>
    </div>
  );
};
