import { useState } from 'react';
import dayjs from 'dayjs';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SetSchedule = () => {
    const today = dayjs();
    const [selectedMonth, setSelectedMonth] = useState(today.month());
    const [selectedYear, setSelectedYear] = useState(today.year());
    const [selectedDate, setSelectedDate] = useState(today.date());

    const daysInMonth = dayjs(`${selectedYear}-${selectedMonth + 1}`).daysInMonth();

    const datesArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
        datesArray.push({
            date: i,
            day: dayjs(`${selectedYear}-${selectedMonth + 1}-${i}`).day(),
        });
    }

    const handleDateClick = (date) => {
        if (isDateSelectable(date)) {
            setSelectedDate(date);
        }
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
        setSelectedDate(today.date());
    };

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
        if (parseInt(e.target.value) > today.year()) {
            setSelectedMonth(0);
        } else {
            setSelectedMonth(today.month());
        }
        setSelectedDate(today.date());
    };

    const isDateSelectable = (date) => {
        if (selectedYear === today.year() && selectedMonth === today.month()) {
            return date >= today.date();
        }
        return true;
    };

    const monthOptions = [];
    let startMonth = selectedYear === today.year() ? today.month() : 0;
    let endMonth = selectedYear === today.year() + 1 ? today.month() : 11;

    for (let i = startMonth; i <= endMonth; i++) {
        monthOptions.push(
            <option key={i} value={i}>
                {dayjs().month(i).format('MMMM')}
            </option>
        );
    }

    const yearOptions = [today.year(), today.year() + 1].map((year) => (
        <option key={year} value={year}>
            {year}
        </option>
    ));

    return (
        <section className="container mx-auto">
            <div className="flex gap-[20px] flex-wrap justify-between sm:justify-start sm:gap-[50px] mb-[10px] pt-[20px] px-[15px]">
                <div className='flex items-center gap-[10px]'>
                    <label className="text-[#2260FF] text-[18px] tracking-wider font-bold mb-[2px]">Month:</label>
                    <select
                        className="p-[8px] border border-[#2260FF] rounded cursor-pointer"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                    >
                        {monthOptions}
                    </select>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <label className="text-[#2260FF] text-[18px] tracking-wider font-bold mb-[2px]">Year:</label>
                    <select
                        className="p-[8px] border border-[#2260FF] rounded cursor-pointer"
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        {yearOptions}
                    </select>
                </div>
            </div>

            <div className="flex gap-[20px] overflow-x-auto p-[15px]">
                {datesArray.map(({ date, day }) => (
                    <div
                        key={date}
                        className={`flex flex-col items-center p-2 rounded-full min-w-[50px] min-h-[70px] text-center cursor-pointer ${date === selectedDate
                            ? 'bg-blue-600 text-white': isDateSelectable(date)? 'bg-gray-100 text-gray-800': 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        onClick={() => handleDateClick(date)}
                    >
                        <span className="text-xl font-bold">{date}</span>
                        <small
                            className={`text-xs ${date === selectedDate ? 'text-white' : 'text-gray-500'
                                }`}
                        >
                            {daysOfWeek[day].toUpperCase()}
                        </small>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SetSchedule;
