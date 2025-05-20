const basicFetchOptions = {
  method: "GET",
  credentials: "include",
};

export const deleteOptions = {
  method: "DELETE",
  credentials: "include",
};

export const getPostOptions = (body) => ({
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export const getPatchOptions = (body) => ({
  method: "PATCH",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export const fetchHandler = async (url, options = {}) => {
  try {
    //fetch & destructure the response
    const response = await fetch(url, options);
    const { ok, status, headers } = response;

    //checks the headers to see if the headers' content type is Json or empty string
    const isJson = (headers.get("content-type") || "").includes(
      "application/json"
    );

    // console.log("is this json: " + isJson);
    // console.log("Response headers:");
    // for (let [key, value] of response.headers.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    //response data is the custom message that is returned from the "server.send({message})"
    //we check to see if it is Json first then we try to parse it. Otherwise we return the response text
    const responseData = await (isJson ? response.json() : response.text());
    //console.log("responseData: ", responseData);

    if (!ok)
      throw new Error(`Error! ${status}. ${responseData.message}`, {
        cause: status,
      });

    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};
