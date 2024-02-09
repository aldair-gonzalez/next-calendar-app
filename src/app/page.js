"use client";

import { useState } from "react";

const page = () => {
  const [selectedDay, setSelectedDay] = useState(null); // Estado para almacenar el dia seleccionado
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Estado para almacenar el mes actual
  const [highlightedDays, setHighlightedDays] = useState([12, 21, 24]); // Días que tendrán un color por defecto

  const handleMonthChange = (increment) => {
    setSelectedDate(null);
    setSelectedDay(null);
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  const handleDateClick = (day) => {
    setSelectedDay(null);
    setSelectedDay(day);
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
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

    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const emptyDays = Array.from({ length: firstDayOfMonth }, (i) => null);

    return [...emptyDays, ...calendarDays].map((day, i) => (
      <button
        key={i}
        className={`${
          day !== null &&
          day !== selectedDay &&
          "hover:bg-orange-600 hover:bg-opacity-30 pointer-events-auto"
        } ${highlightedDays.includes(day) && "font-black text-orange-600"} ${
          selectedDay === day && day !== null && "bg-violet-600 bg-opacity-30"
        } pointer-events-none w-auto h-8 rounded-md flex items-center justify-center`}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </button>
    ));
  };

  return (
    <div className="w-full grid grid-cols-1 place-content-center place-items-center gap-5">
      <h2 className="text-center">Calendario más estado</h2>
      <div className="w-80">
        <ul className="bg-black text-white w-full py-1 rounded-t-md flex items-center justify-between">
          <li>
            <button
              className="text-gray-400 hover:text-white rounded-md px-4 py-1"
              onClick={() => handleMonthChange(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
          </li>
          <li>
            <h2>
              {currentMonth.toLocaleDateString("es-ES", {
                month: "long",
                year: "numeric",
              })}
            </h2>
          </li>
          <li>
            <button
              className="text-gray-400 hover:text-white rounded-md px-4 py-1"
              onClick={() => handleMonthChange(+1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </li>
        </ul>
        <ul className="grid grid-cols-7 gap-0 5">
          <li className="w-auto h-8 flex items-center justify-center">D</li>
          <li className="w-auto h-8 flex items-center justify-center">L</li>
          <li className="w-auto h-8 flex items-center justify-center">M</li>
          <li className="w-auto h-8 flex items-center justify-center">M</li>
          <li className="w-auto h-8 flex items-center justify-center">J</li>
          <li className="w-auto h-8 flex items-center justify-center">V</li>
          <li className="w-auto h-8 flex items-center justify-center">S</li>
        </ul>
        <div className="w-full grid grid-cols-7 gap-0.5">
          {renderCalendar()}
        </div>
      </div>
      <p className="text-center">
        {selectedDate
          ? selectedDate.toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })
          : "Seleccione una fecha"}
      </p>
    </div>
  );
};
export default page;
