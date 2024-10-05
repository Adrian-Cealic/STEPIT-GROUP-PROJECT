import React, { useState } from 'react';
import { LiaAngleLeftSolid } from "react-icons/lia";
import Card from "../assets/card.png";
import { Link } from "react-router-dom";
import BackCard from "../assets/backCard.png";
import Half from '../assets/HalfScreen.jpg'

const PayPage2 = () => {
  const [CardNr, setCardNr] = useState('');
  const [CardName, setCardName] = useState('');
  const [CardDate, setCardDate] = useState('');
  const [CardCVV, setCardCVV] = useState('');
  const [isFlipped, setIsFlipped] = useState(false); 

  const defaultCardNumber = '000 000 000 00';
  const defaultCardName = "John Doe";
  const defaultCardDate = "MM/YY";
  const defaultCardCVV = "000";

  const handleNameChange = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 16);
    setCardName(formattedValue);
    setIsFlipped(false); 
  };

  const handleDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const month = value.slice(0, 2);
    const year = value.slice(2, 4);
  
    let formattedMonth = month;
    if (month && parseInt(month, 10) > 12) {
      formattedMonth = '12';
    }
    const formattedValue = `${formattedMonth}${year ? '/' + year : ''}`.slice(0, 5);
    setCardDate(formattedValue);
    setIsFlipped(false); 
  };

  const maxLength = 11;

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
      setCardNr(formattedValue);
      setIsFlipped(false); 
    }
  };

  const handleCvvInput = (e) => {
    const value = e.target.value;
    const formattedValue = value.replace(/\D+/g, '').slice(0, 3);
    setCardCVV(formattedValue);
    setIsFlipped(true);
  };

  return (
    <div className='lg:flex'>
      <div className='hidden lg:block w-1/2 border-r border-[#2260FF] h-screen '>
        <div className='relative'>
            <img src={Half} alt="" className='w-full' />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
            
        </div>
        <div className='lg:w-1/2'>
      <div className='flex items-center text-[#2260FF] px-4 py-8 justify-between'>
        <Link to={"/pay1"}>
          <LiaAngleLeftSolid size={25} />
        </Link>
        <p className='text-2xl font-medium flex-grow text-center'>Add Card</p>
        <div className='w-6'></div>
      </div>
      <div className="flex flex-col items-center ">
       
        <div className={`flip-card w-[300px] h-[200px] ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="flip-card-inner">
            {/* Front*/}
            <div className="flip-card-front bg-[#2260FF] rounded-2xl">
              <img src={Card} alt="Card" />
              <div className='absolute top-[70px] left-[30px] text-white'>
                <div className='text-xl tracking-wider'>
                  {generateCardNumber(CardNr)}
                </div>
              </div>
              <div className='absolute top-[115px] left-[30px] text-white flex text-[13px]'>
                <div className='mr-3'>
                  <p className=''>Card Holder Name</p>
                  <p className='font-bold'>{CardName || defaultCardName}</p>
                </div>
                <div>
                  <p className='text-[13px]'>Expiry Date</p>
                  <p className='font-bold'>{CardDate || defaultCardDate}</p>
                </div>
              </div>
            </div>

            {/* Back*/}
            <div className="flip-card-back">
              <img src={BackCard} alt="Back of Card" className="rounded-2xl w-full h-full object-cover" />
              <div className='absolute top-[120px] left-[170px]'>
                <div className='text-xl tracking-wider'>
                  {CardCVV || defaultCardCVV}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className='mx-12 flex flex-col justify-center items-center gap-6'>
          <div>
            <p className='mb-2 mt-4 text-lg'>Card Holder Name</p>
            <input type="text"
            required
              placeholder='John Doe'
              onChange={handleNameChange}
              value={CardName}
              className='outline-none py-3 px-4 rounded-3xl text-[#809CFF] placeholder-[#809CFF] w-[300px] bg-[#ECF1FF]'
            />
          </div>

          <div>
            <p className='mb-2 text-lg'>Card Number</p>
            <input
              type="text"
              required
              placeholder='000 000 000 00'
              value={CardNr}
              onChange={handleInputChange}
              className="outline-none py-3 px-4 rounded-3xl text-[#809CFF] placeholder-[#809CFF] w-[300px] bg-[#ECF1FF]"
              maxLength={14}
            />
          </div>

          <div className='flex gap-4'>
            <div>
              <p className='mb-2 text-lg'>Expiry Date</p>
              <input type="text"
              required
                onChange={handleDateChange}
                value={CardDate}
                placeholder='MM/YY'
                className='outline-none w-[142px] py-3 px-4 bg-[#ECF1FF] rounded-3xl text-[#809CFF] placeholder-[#809CFF]'
              />
            </div>
            <div>
              <p className='mb-2 text-lg'>CVV</p>
              <input type="text"
              required
                onChange={handleCvvInput}
                value={CardCVV}
                placeholder='000'
                className='outline-none w-[142px] py-3 px-4 bg-[#ECF1FF] rounded-3xl text-[#809CFF] placeholder-[#809CFF]'
              />
            </div>
          </div>

        </div>
        <Link to={"/pay3"} className='mb-4'>
            <button className='text-2xl text-white rounded-3xl py-3 px-2 flex items-center justify-center bg-[#2260FF] w-[300px] mt-6'> Save Card</button>
        </Link>
        </div> 
      </div>
    </div>
  );
};

export default PayPage2;
