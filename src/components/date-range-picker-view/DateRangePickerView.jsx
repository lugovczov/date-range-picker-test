import React from 'react';
import {RangeTabs} from "../range-tabs/RangeTabs";
import './date-range-picker-view.css'

export const DateRangePickerView = () => {

  return (
    <div className="date-range-picker-view w-96 flex">
      <div className="flex-auto">

        // components:
        // buttons (4) when set (-2 -1 || +1 +2) month

        // calendar month (2)
        // data-number (2 state: empty + selected) [ 31 ]
      </div>

      <div className="flex-none right-part">
        <RangeTabs />
      </div>

    </div>
  );
};
