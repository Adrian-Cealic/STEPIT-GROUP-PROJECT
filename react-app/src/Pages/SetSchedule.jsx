import { useState } from 'react';
import dayjs from 'dayjs';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SetSchedule = () => {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
    const [selectedYear, setSelectedYear] = useState(dayjs().year());
    const [selectedDate, setSelectedDate] = useState(dayjs().date());

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()

    const daysInMonth = dayjs(`${selectedYear}-${selectedMonth + 1}`).daysInMonth();

    const datesArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
        datesArray.push({
            date: i,
            day: dayjs(`${selectedYear}-${selectedMonth + 1}-${i}`).day(),
        });
    }

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <section className='container mx-auto'>
            <div className='flex gap-[20px] overflow-x-auto p-[15px]'>
            {datesArray.map(({ date, day }) => (
                <div
                    key={date}
                    className={`flex flex-col items-center p-2 rounded-full min-w-[50px] min-h-[70px] text-center cursor-pointer ${(date === selectedDate) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
                        }`}
                    onClick={() => handleDateClick(date)}
                >
                    <span className="text-xl font-bold">{date}</span>
                    <small className={`text-xs ${date === selectedDate ? 'text-white' : 'text-gray-500'}`}>
                        {daysOfWeek[day].toUpperCase()}
                    </small>
                </div>
            ))}
        </div>
        </section>
    )
}

export default SetSchedule
