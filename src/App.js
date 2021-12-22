import React from 'react';
import './App.css';
import {DateRangePickerWrapper}
  from "./components/date-range-picker-wrapper/DateRangePickerWrapper";

function App() {
  return (
    <div className="app">
      <header className="flex justify-between border-b-2 border-gray-100 px-3">

        <div className="py-1">
          <h1 className="text-xl text-gray-900 tracking-tight font-bold">Date Range Picker</h1>
          <p className="text-sm text-gray-400">Uladzimir Luhautsou</p>
        </div>

        <DateRangePickerWrapper/>
      </header>
    </div>
  );
}

export default App;
