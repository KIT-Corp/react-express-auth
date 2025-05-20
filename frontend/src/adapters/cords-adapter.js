import { fetchHandler } from "../utils/fetchingUtils";

export const coords = async () => {
  try {
    const [cord, error] = await fetchHandler("api/banks/coordinates/");
    if (error) {
      console.error("Error fetching points:", error.message);
      return [];
    }
    //console.log(cord);
    return cord;
  } catch (error) {
    console.error("Unexpected error fetching posts:", error.message);
    return [];
  }
};
