"use client"

import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para almacenar la fecha seleccionada
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Estado para almacenar el mes actual

  const handleDateClick = (day) => {
    setSelectedDate(null)
    setSelectedDate(day);
  };

  const handleMonthChange = (increment) => {
    setSelectedDate(null)
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth }, (index) => null);

    return [...emptyDays, ...calendarDays].map((day, index) => (
      <div
        key={index}
        className={`hover:bg-gray-300 rounded-md w-auto h-8 flex items-center justify-center ${day == String(selectedDate).split('/')[0] ? "bg-gray-400" : ""}`}
        onClick={() => handleDateClick(day)}
        role='button'
      >
        {day}
      </div>
    ));
  };

  return (
    <div className='w-full grid gap-5 sm:w-2/3 md:w-1/3'>
      <div className='w-full flex gap-5 items-center justify-between'>
        <button className='hover:bg-gray-300 rounded-md px-4 py-1' onClick={() => handleMonthChange(-1)}>Atras</button>
        <h2>{new Date(currentMonth).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</h2>
        <button className='hover:bg-gray-300 rounded-md px-4 py-1' onClick={() => handleMonthChange(1)}>Siguiente</button>
      </div>
      <ul className="w-full grid grid-cols-7 gap-1">
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>D</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>L</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>M</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>M</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>J</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>V</li>
        <li className='w-auto h-8 rounded-md flex items-center justify-center'>S</li>
      </ul>
      <div className="w-full grid grid-cols-7 gap-1">{renderCalendar()}</div>
      <div className='w-full text-center'>
        <p>Fecha seleccionada: {selectedDate ? `${selectedDate}/${currentMonth.getMonth() + 1}/${currentMonth.getFullYear()}` : 'Ninguna'}</p>
      </div>
    </div>
  );
};

export default Calendar;
