import React from 'react';
import {DateService} from "../../services/date-service/dateService";
import {useDispatch, useSelector} from "react-redux";
import {setFromRange, setToRange} from "../../store/features/range/rangeSlice";
import {RangeTabItem} from "../range-tab-item/RangeTabItem";
import {setActiveTab} from "../../store/features/active-tab/activeTabSlice";
import {setDatePickerOpen} from "../../store/features/date-picker-open/datePickerOpenSlice";

const tabs = [
  {
    id: 'today',
    getRangeFunction: DateService.getTodayRange()
  },
  {
    id: 'yesterday',
    getRangeFunction: DateService.getYesterdayRange()
  },
  {
    id: 'last7Days',
    getRangeFunction: DateService.getLastSevenDaysRange()
  },
  {
    id: 'last30Days',
    getRangeFunction: DateService.getLastThitryDaysRange()
  },
  {
    id: 'thisMonth',
    getRangeFunction: DateService.getThisMonthRange()
  },
  {
    id: 'thisYear',
    getRangeFunction: DateService.getThisYearRange()
  },
  {
    id: 'lifetime',
    getRangeFunction: DateService.getLifeTimeRange()
  },
]

export const RangeTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  const handleClick = (getRangeFunction, tab_id) => {
    const { startDate, endDate } = getRangeFunction;

    dispatch(setFromRange(startDate.getTime()));
    dispatch(setToRange(endDate.getTime()));

    dispatch(setActiveTab(tab_id));

    setTimeout(() => {
      dispatch(setDatePickerOpen(false));
    }, 300);
  }

  return (
    <div className="flex flex-col">
      {tabs.map((tab_item) => {
        return (
          <RangeTabItem
            id={tab_item.id}
            key={tab_item.id}
            handleClick={() => handleClick(tab_item.getRangeFunction, tab_item.id)}
            active={activeTab === tab_item.id}
          />
        )
      })}
    </div>
  );
};
