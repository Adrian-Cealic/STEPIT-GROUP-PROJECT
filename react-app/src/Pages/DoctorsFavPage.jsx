import React, { useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import back from '../assets/back.png';
import { useContext } from 'react';
import doctorsContext from '../contexts/doctorsContext';
import search from '../assets/search.svg';
import { Link } from 'react-router-dom';
import { IoMdMale, IoMdFemale } from "react-icons/io";

const DoctorsFavPage = () => {
    const { doctors } = useContext(doctorsContext);

    const [sortKey, setSortKey] = React.useState('name');
    const [doctorsToDisplay, setDoctorsToDisplay] = React.useState([]);
    const [searchBox, setSearchBox] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');

    // Function to filter doctors based on search text
    const filterDoctors = (doctorsList, search) => {
        if (search === '') {
            return doctorsList;
        }
        return doctorsList.filter(doctor =>
            doctor.name.toLowerCase().includes(search.toLowerCase().trim())
        );
    };

    // Function to sort the filtered doctors based on sort key
    const sortDoctors = (doctorsList, key) => {
        switch (key) {
            case 'name':
                return [...doctorsList].sort((a, b) => a.name.localeCompare(b.name));
            case 'male':
                return doctorsList.filter(doctor => doctor.gender === 'male');
            case 'female':
                return doctorsList.filter(doctor => doctor.gender === 'female');
            default:
                return doctorsList;
        }
    };

    // Update doctors to display when searchText or sortKey changes
    useEffect(() => {
        const filteredDoctors = filterDoctors(doctors, searchText);
        const sortedDoctors = sortDoctors(filteredDoctors, sortKey);
        setDoctorsToDisplay(sortedDoctors);
    }, [searchText, sortKey, doctors]);

    return (
        <section className='mx-auto container flex flex-col gap-[30px] px-[30px]'>
            <div className="flex py-[20px] justify-between items-center">
                <Link to={'/'}><img src={back} alt="Go Back" className='max-h-[20px] w-[12px]' /></Link>
                <p className='text-[#2260FF] text-[28px] font-bold tracking-wider'>Doctors</p>
                <div className="bg-[#CAD6FF] rounded-full py-[5px]" onClick={() => setSearchBox(!searchBox)}>
                    <img src={search} alt="search" className='max-h-[20px] w-[30px] cursor-pointer ' />
                </div>
            </div>

            <div className={`${searchBox ? 'flex' : 'hidden'} gap-[15px] -mt-[30px]`}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className='text-center mx-auto w-full outline-none px-[5px] py-[8px] border-2 border-[#2260FF] rounded-full'
                    placeholder='Search for doctors here'
                />
            </div>

            <div className="flex gap-[10px] items-center">
                <p className='font-semibold'>Sort By</p>
                <div
                    className={`font-semibold px-[13px] py-[3px] rounded-full items-center justify-center cursor-pointer ${sortKey === 'name' ? 'bg-[#2260FF] text-white' : 'bg-[#CAD6FF] text-[#2260FF]'}`}
                    onClick={() => setSortKey('name')}
                >
                    A - Z
                </div>
                <div
                    className={`font-semibold px-[13px] py-[9px] rounded-full items-center justify-center cursor-pointer ${sortKey === 'female' ? 'bg-[#2260FF]' : 'bg-[#CAD6FF]'}`}
                    onClick={() => setSortKey('female')}
                >
                    <IoMdFemale className={`${sortKey === 'female' ? 'text-white' : 'text-[#2260FF]'} `} />
                </div>
                <div
                    className={`font-semibold px-[13px] py-[9px] rounded-full items-center justify-center cursor-pointer ${sortKey === 'male' ? 'bg-[#2260FF]' : 'bg-[#CAD6FF]'}`}
                    onClick={() => setSortKey('male')}
                >
                    <IoMdMale className={`${sortKey === 'male' ? 'text-white' : 'text-[#2260FF]'} `} />
                </div>
            </div>

            <div className='justify-center flex flex-wrap gap-[15px]'>
                {doctorsToDisplay.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        field={doctor.field}
                        doctorName={doctor.name}
                        doctorId={doctor.id}
                    />
                ))}
            </div>
        </section>
    );
};

export default DoctorsFavPage;
