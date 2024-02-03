"use client";

import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Estado para almacenar el mes actual

  const handleDateClick = (day) => {
    setSelectedDate(null);
    setSelectedDate(day);
  };

  const handleMonthChange = (increment) => {
    setSelectedDate(null);
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();

    const calendarDays = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    const emptyDays = Array.from({ length: firstDayOfMonth }, (index) => null);

    return [...emptyDays, ...calendarDays].map((day, index) => (
      <div
        key={index}
        className={`hover:bg-black hover:bg-opacity-50 hover:text-white text-sm rounded-md w-auto h-8 flex items-center justify-center ${
          day == String(selectedDate).split("/")[0] ? "bg-black text-white" : ""
        }`}
        onClick={() => handleDateClick(day)}
        role="button"
      >
        {day}
      </div>
    ));
  };

  return (
    <div className="w-full grid gap-5 sm:w-2/3 md:w-1/3 text-sm">
      <div className="bg-black text-white w-full flex gap-5 items-center justify-between">
        <button
          className="text-gray-400 hover:text-white rounded-md px-4 py-1"
          onClick={() => handleMonthChange(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <h2>
          {new Date(currentMonth).toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          className="text-gray-400 hover:text-white rounded-md px-4 py-1"
          onClick={() => handleMonthChange(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler  icon-tabler-chevron-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
      <ul className="w-full grid grid-cols-7 gap-1">
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          D
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          L
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          M
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          M
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          J
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          V
        </li>
        <li className="w-auto h-8 rounded-md flex items-center justify-center">
          S
        </li>
      </ul>
      <div className="w-full grid grid-cols-7 gap-1">{renderCalendar()}</div>
      <div className="w-full text-center">
        <p>
          Fecha seleccionada:
          {selectedDate
            ? `${selectedDate}/${
                currentMonth.getMonth() + 1
              }/${currentMonth.getFullYear()}`
            : "Ninguna"}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
