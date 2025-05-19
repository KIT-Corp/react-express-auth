/** @format */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FoodBankSignupForm } from '../components/foodbanksignup-form';

export default function FoodBankSignUp() {
  const location = useLocation();
  const initialZipcode = location.state?.zipcode || '';

  const [foodBankName, setFoodBankName] = useState('');
  const [street, setStreet] = useState('');
  const [borough, setBorough] = useState('');
  const [zipcode, setZipcode] = useState(initialZipcode);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <FoodBankSignupForm
          foodBankName={foodBankName}
          setFoodBankName={setFoodBankName}
          street={street}
          setStreet={setStreet}
          borough={borough}
          setBorough={setBorough}
          zipcode={zipcode}
          setZipcode={setZipcode}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </div>
    </div>
  );
}
