import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styles from 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = props => {
  const dummyEvents = [
    {
      allDay: false,
      endDate: new Date('January 01, 2018 20:00:00'),
      startDate: new Date('December 31, 2017 06:00:00'),
      title: 'New Years Shindig!',
    },
    {
      allDay: true,
      endDate: new Date('January 03, 2018 11:13:00'),
      startDate: new Date('January 03, 2018 11:13:00'),
      title: 'All Day Event',
    },
  ];

  return (
    <div>
      <BigCalendar
        className={styles}
        events={dummyEvents}
        startAccessor="startDate"
        endAccessor="endDate"
      />
    </div>
  );
};

export default Calendar;
