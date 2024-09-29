import React, { useState } from 'react';
import Card from "../assets/card.png";

const DynamicIDNPCard = () => {
  const [idnp, setIdnp] = useState('');

  const maxLength = 11;

 
  const defaultCardNumber = '000 000 000 00';
  const generateCardNumber = (input) => {
    let formattedCardNumber = defaultCardNumber.split('');
    for (let i = 0; i < input.length; i++) {
      formattedCardNumber[i] = input[i];
    }

    return formattedCardNumber.join('');
  };

  const formatInput = (value) => {
    return value.replace(/\s+/g, '').replace(/(\d{3})(?=\d)/g, '$1 ').trim();
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\s+/g, '');
    if (/^\d*$/.test(value) && value.length <= maxLength) {
      const formattedValue = formatInput(value);
      setIdnp(formattedValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className='relative bg-[#2260FF] rounded-2xl'>
        <img src={Card} alt="Card" className='' />
        
        <div className='absolute top-[70px] left-[30px] text-white'>
          <div className='text-xl tracking-wider'>
            {generateCardNumber(idnp)}
          </div>
        </div>
      </div>
      
      <input
        type="text"
        value={idnp}
        onChange={handleInputChange}
        placeholder="Type your Card number here"
        className="border border-gray-300 rounded-lg p-2 mt-4 focus:outline-none focus:border-blue-500"
        maxLength={16}
      />
    </div>
  );
};

export default DynamicIDNPCard;
