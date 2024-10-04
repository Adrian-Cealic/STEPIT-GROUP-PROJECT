import { useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router-dom';
import back from '../assets/back.png';
import doctorsContext from '../contexts/doctorsContext';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const generateTimeSlots = () => {
    const times = [];
    let start = dayjs().hour(9).minute(0);
    const end = dayjs().hour(17).minute(0);

    while (start.isBefore(end)) {
        times.push(start.format('h:mm A'));
        start = start.add(30, 'minute');
    }

    return times;
};

const SetSchedule = () => {
    // const { doctorId } = useParams();
    // const { doctors } = useContext(doctorsContext);

    // const [doctor, setDoctor] = useState({});

    // useEffect(() => {
    //     if (doctorId && doctors) {
    //         const doctor = doctors.find(d => d.id === parseInt(doctorId));
    //         if (doctor) {
    //             setDoctor(doctor);
    //         }
    //     }
    // }, [doctorId, doctors])

    const doctor = {
        name: "Dr. Olivia Turner, M.D.",
        occupiedTimes: [
            {
                day: "04.10.2024",
                time: '9:00 AM',
            },
            {
                day: "04.10.2024",
                time: '9:30 AM',
            },
            {
                day: "04.10.2024",
                time: '13:00 AM',
            },
            {
                day: "05.10.2024",
                time: '10:00 AM',
            },
            {
                day: "05.10.2024",
                time: '12:30 AM',
            },
            {
                day: "09.12.2024",
                time: '11:00 AM',
            },
            {
                day: "04.01.2025",
                time: '9:00 AM',
            },
            {
                day: "04.01.2025",
                time: '9:30 AM',
            },
            {
                day: "05.03.2025",
                time: '13:00 AM',
            }
        ]
    }

    const today = dayjs();
    const [selectedMonth, setSelectedMonth] = useState(today.month());
    const [selectedYear, setSelectedYear] = useState(today.year());
    const [selectedDate, setSelectedDate] = useState(today.date());
    const [selectedTime, setSelectedTime] = useState(null);

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
            setSelectedTime(null);
        }
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
        setSelectedDate(today.date());
        setSelectedTime(null);
    };

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
        if (parseInt(e.target.value) > today.year()) {
            setSelectedMonth(0);
        } else {
            setSelectedMonth(today.month());
        }
        setSelectedDate(today.date());
        setSelectedTime(null);
    };

    const isDateSelectable = (date) => {
        if (selectedYear === today.year() && selectedMonth === today.month()) {
            return date >= today.date();
        }
        return true;
    };

    const formattedSelectedDate = dayjs(`${selectedYear}-${selectedMonth + 1}-${selectedDate}`).format('DD.MM.YYYY');

    const occupiedTimesForSelectedDate = doctor.occupiedTimes
        .filter(slot => slot.day === formattedSelectedDate)
        .map(slot => slot.time);

    const handleTimeClick = (time) => {
        if (!occupiedTimesForSelectedDate.includes(time)) {
            setSelectedTime(time);
        }
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

    const allTimeSlots = generateTimeSlots();

    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);

    return (
        <section className='flex flex-col gap-[30px] mb-[80px]'>
            <div className="flex py-[10px] px-[20px] gap-[20px] justify-between items-center container mx-auto">
                <Link to={'/'}><img src={back} alt="Go Back" className='max-h-[20px] w-[12px]' /></Link>
                <p className='bg-[#2260FF] text-center text-white text-[18px] px-[10px] py-[5px] rounded-full font-bold tracking-wider'>{doctor.name}</p>
            </div>

            <div className="bg-[#CAD6FF] -mt-[10px]">
                <div className="flex gap-[20px] flex-wrap justify-between sm:justify-start sm:gap-[50px] mb-[10px] pt-[20px] px-[15px] container mx-auto">
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

                <div className="flex gap-[20px] overflow-x-auto p-[15px] container mx-auto">
                    {datesArray.map(({ date, day }) => (
                        <div
                            key={date}
                            className={`flex flex-col items-center p-2 rounded-full min-w-[50px] min-h-[70px] text-center cursor-pointer ${date === selectedDate
                                ? 'bg-blue-600 text-white' : isDateSelectable(date) ? 'bg-gray-100 text-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
            </div>

            <div className="container mx-auto px-[20px]">
                <p className='font-bold tracking-wide text-[#2260FF]'>Available Time</p>
                <div className="flex flex-wrap gap-4 mt-4">
                    {allTimeSlots.map((time, index) => (
                        <button
                            key={index}
                            className={`p-3 rounded-lg text-sm ${occupiedTimesForSelectedDate.includes(time)
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : selectedTime === time
                                    ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                            onClick={() => handleTimeClick(time)}
                            disabled={occupiedTimesForSelectedDate.includes(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto h-[2px] w-full bg-[#2260FF]"></div>

            <div className="container mx-auto px-[20px] flex flex-col gap-[25px]">
                <p className='font-bold tracking-wide text-[#2260FF]'>Patient Details</p>
                <div className="flex gap-[15px]">
                    <p className={`${selectedPerson === 'Yourself' ? 'bg-[#2260FF] text-white' : 'bg-white text-[#2260FF]'} border border-[#2260FF] cursor-pointer 
                                   text-center text-[14px] px-[10px] py-[5px] rounded-full font-bold tracking-wider`}
                        onClick={() => setSelectedPerson('Yourself')}
                    >
                        Yourself
                    </p>
                    <p className={`${selectedPerson === 'Another person' ? 'bg-[#2260FF] text-white' : 'bg-white text-[#2260FF]'} border border-[#2260FF] cursor-pointer 
                                   text-center text-[14px] px-[10px] py-[5px] rounded-full font-bold tracking-wider`}
                        onClick={() => setSelectedPerson('Another person')}
                    >
                        Another Person
                    </p>
                </div>

                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] tracking-wider ml-[5px]">Full name</label>
                    <input type="text" className="p-[10px] text-[#2260FF] bg-[#ECF1FF] rounded-full w-full focus:outline-none" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-[5px]">
                    <label className="text-[14px] tracking-wider ml-[5px]">Age</label>
                    <input type="number" className="p-[10px] text-[#2260FF] bg-[#ECF1FF] rounded-full w-full focus:outline-none" placeholder="35" />
                </div>

                <div className="flex flex-col gap-[5px]">
                    <p className="text-[14px] tracking-wider ml-[5px]">Gender</p>
                    <div className="flex gap-[15px]">
                        <p className={`${selectedGender === 'Male' ? 'bg-[#2260FF] text-white' : 'bg-white text-[#2260FF]'} border border-[#2260FF] cursor-pointer 
                                   text-center text-[14px] px-[10px] py-[5px] rounded-full font-bold tracking-wider`}
                            onClick={() => setSelectedGender('Male')}
                        >
                            Male
                        </p>
                        <p className={`${selectedGender === 'Female' ? 'bg-[#2260FF] text-white' : 'bg-white text-[#2260FF]'} border border-[#2260FF] cursor-pointer 
                                   text-center text-[14px] px-[10px] py-[5px] rounded-full font-bold tracking-wider`}
                            onClick={() => setSelectedGender('Female')}
                        >
                            Female
                        </p>
                        <p className={`${selectedGender === 'Other' ? 'bg-[#2260FF] text-white' : 'bg-white text-[#2260FF]'} border border-[#2260FF] cursor-pointer 
                                   text-center text-[14px] px-[10px] py-[5px] rounded-full font-bold tracking-wider`}
                            onClick={() => setSelectedGender('Other')}
                        >
                            Other
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto h-[2px] w-full bg-[#2260FF]"></div>

            <div className="flex flex-col gap-[5px] container mx-auto px-[20px]">
                <p className="text-[14px] tracking-wider ml-[5px]">Describe your problem</p>
                <textarea className='outline-none border-2 border-[#CAD6FF] text-[#2260FF] rounded-3xl min-h-[100px] px-[20px] py-[15px]' placeholder='Enter your problem here'></textarea>
            </div>

            <Link className='container mx-auto bg-[#2260FF] text-white text-center text-[14px] py-[5px] rounded-full font-bold 
                             tracking-wider hover:bg-blue-800 transition-all duration-100 ease-in'>
                Go to confirmation
            </Link>
        </section>
    );
};

export default SetSchedule;
