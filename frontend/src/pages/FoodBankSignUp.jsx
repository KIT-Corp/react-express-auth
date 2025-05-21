/** @format */
import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FoodBankSignupForm } from '../components/foodbanksignup-form';
import { registerUser } from '../adapters/auth-adapter';
import { createFoodBank } from '../adapters/foodbank-adapter';
import CurrentUserContext from '../contexts/current-user-context';

export default function FoodBankSignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(CurrentUserContext);
  const userData = location.state || {};

  const [foodBankName, setFoodBankName] = useState('');
  const [street, setStreet] = useState('');
  const [borough, setBorough] = useState('');
  const [zipcode, setZipcode] = useState(userData.zipcode || '');
  const [type, setType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFoodBankSubmit = async ({
    foodBankName,
    street,
    borough,
    zipcode,
    phoneNumber,
    type,
  }) => {
    setLoading(true);
    try {
      const [user, userError] = await registerUser({
        username: userData.username,
        password: userData.password,
        email: userData.email,
        is_food_bank: true,
        age: userData.age === '' ? null : parseInt(userData.age, 10),
        zipcode: userData.zipcode,
      });

      if (userError) {
        console.error(userError);
        return;
      }

      const [foodBank, fbError] = await createFoodBank({
        name: foodBankName,
        food_bank_street: street,
        food_bank_borough: borough,
        food_bank_zip: zipcode,
        type,
        phone_number: phoneNumber,
      });

      if (fbError) {
        console.error(fbError);
        return;
      }

      setCurrentUser(user);
      navigate(`/users/${user.id}`);
    } finally {
      setLoading(false);
    }
  };

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
          type={type}
          setType={setType}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          onSubmit={handleFoodBankSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}
