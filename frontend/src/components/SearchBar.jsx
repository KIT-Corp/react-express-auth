import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SearchBar.css";
import { cfcActiveData } from "../../../API/activefoodbanks0425";
import { useEffect } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [foodbank, setFoodBank] = useState([]);

  const fetchData = (searchText) => {
    const data = Object.values(cfcActiveData);
    // we are storing our data into results, it will return true if it matches
    const results = data.filter((foodbank) =>
      // it will lowercase them and look for them
      foodbank.Program.toLowerCase().includes(searchText.toLowerCase())
    );
    setResults(results);
    //console.log(results);
  };

  const handleChange = (searchText) => {
    setInput(searchText);
    // console.log("text: " + searchText + " " + "input: " + input);
    fetchData(searchText);
  };
  const clickedFoodBank = (result) => {
    setFoodBank(result);
  };

  //when we click on a foodbank, useEffect automatically loads /foodBankInfoPage because
  //useEffect has the state 'foodBank' in as it's dependency
  let navigate = useNavigate();
  useEffect(() => {
    if (foodbank.length !== 0) {
      // console.log("RUAH", foodbank)
      let path = "/foodBankInfoPage";
      navigate(path, { state: foodbank });
    }
  }, [foodbank]);

  return (
    <div className="input-wrapper">
      <input
        placeholder="type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="results-list">
        <ul>
          {results.map((foodBank, index) => (
            //we need a key to identify the "li" in the ul.
            <li
              className="search-result"
              key={foodBank.id}
              onClick={() => {
                clickedFoodBank(results[index]);
              }}
            >
              {foodBank.Program}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
