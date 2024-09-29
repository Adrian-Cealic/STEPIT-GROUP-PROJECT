import React from 'react';
import DoctorCard from '../components/DoctorCard';

const DoctorsFavPage = ({ doctors }) => {
    return (
        <div className='justify-center flex flex-col gap-[15px]'>
            {doctors.map((doctor) => (
                <DoctorCard 
                    key={doctor.id} 
                    field={doctor.field} 
                    doctorName={doctor.name} 
                    doctorId={doctor.id} 
                />
            ))}
        </div>
    );
}

export default DoctorsFavPage;
