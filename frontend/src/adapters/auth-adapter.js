import {
  fetchHandler,
  getPostOptions,
  deleteOptions,
} from "../utils/fetchingUtils";

const baseUrl = "/api/auth";

export const registerUser = async (
  is_food_bank,
  username,
  email,
  age,
  password,
  zipcode
) => {
  return fetchHandler(
    `${baseUrl}/register`,
    getPostOptions(is_food_bank, username, email, age, password, zipcode)
  );
};

export const logUserIn = async ({ username, password }) => {
  return fetchHandler(
    `${baseUrl}/login`,
    getPostOptions({ username, password })
  );
};

export const logUserOut = async () => {
  return fetchHandler(`${baseUrl}/logout`, deleteOptions);
};

export const checkForLoggedInUser = async () => {
  return await fetchHandler(`${baseUrl}/me`);
};
