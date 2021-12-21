import React, {useState} from 'react';
import {DateService} from "../../services/date-service/dateService";
import {useDispatch} from "react-redux";
import {setFromRange, setToRange} from "../../store/features/range/rangeSlice";
import {RangeTabItem} from "../range-tab-item/RangeTabItem";

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
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (getRangeFunction, tab_id) => {
    const { startDate, endDate } = getRangeFunction;

    dispatch(setFromRange(startDate.getTime()));
    dispatch(setToRange(endDate.getTime()));

    setActiveTab(tab_id);

    // TODO close picker
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
