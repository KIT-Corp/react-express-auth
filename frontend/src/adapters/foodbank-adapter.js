/** @format */

// /frontend/src/adapters/foodbank-adapter.js
import { fetchHandler, getPostOptions } from '../utils/fetchingUtils';

const foodBankBaseUrl = '/api/foodbanks';

export const createFoodBank = async ({
  name,
  food_bank_street,
  food_bank_borough,
  food_bank_zip,
  type,
  phone_number,
}) => {
  return fetchHandler(
    foodBankBaseUrl,
    getPostOptions({
      name,
      food_bank_street,
      food_bank_borough,
      food_bank_zip,
      type,
      phone_number,
    })
  );
};
