import React from 'react';

export const DateRangePickerView = () => {

  return (
    <div className="date-range-picker-view w-96 h-96 flex">
      <div className="flex-auto">

        // components:
        // buttons (4) when set (-2 -1 || +1 +2) month

        // calendar month (2)
        // data-number (2 state: empty + selected) [ 31 ]

        // right part (today, last 7) - RangeTabs
          // RangeTabItem

      </div>

      <div className="flex-none w-24 bg-dark">
        <a>today</a>
        <a>last 7</a>
      </div>

    </div>
  );
};
