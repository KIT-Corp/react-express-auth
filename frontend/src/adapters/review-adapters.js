import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
} from "../utils/fetchingUtils";

const baseUrl = "/api";

export const createReview = async ({ foodbankid, content }) => {
  return fetchHandler(
    `${baseUrl}/reviews/create`,
    getPostOptions({ foodbankid, content })
  );
};

export const getFoodBankReviews = async (id) => {
  return await fetchHandler(`${baseUrl}/foodbanks/${id}/reviews`);
};

export const getAllUserReviews = async (id) => {
  return fetchHandler(`${baseUrl}/users/${id}/reviews`);
};

// export const updateReview = async ({ id, username }) => {
//   return fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
// };
