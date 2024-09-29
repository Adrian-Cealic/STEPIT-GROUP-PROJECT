import React from 'react'
import DoctorCard from '../components/DoctorCard'
const DoctorsFavPage = ({ doctors }) => {
    return (
        <div className='jusify-center flex flex-col gap-[15px]'>
            {
                doctors.map((doctors,key) => <DoctorCard key={key} field={doctors.field} doctorName={doctors.name} />)
            }
        </div>
    )
}

export default DoctorsFavPage
