export default function cordi (foodbank) {
    console.log('hello',foodbank.Program)
  let name = foodbank.Program;
  let searching = " ";
  let count = name.split(" ");
  let word = count.length - 1;

  if (word === 0) {
    searching = name;
  } else {
    searching = name.split(" ").join("+");
  }

  if (searching[searching.length - 1] === "%") {
    let newW = searching.split("");
    newW.pop();
    searching = newW.join("");
  }
  return fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${searching}&format=json&apiKey=${api_key}`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }

      const locationPromise = response.json();
      return locationPromise;
    })
    .then((data) => {
      if (data.length === 0) {
        return null;
      }

      const cords = {};

      cords.long = results[0].lon;
      cords.lat = results[0].lat;

      console.log(cords);
      return cords;
    })
    .catch((err) => {
      // 6. Handle Errors
      console.error(err);
    });

  }