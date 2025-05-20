import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/SearchBar.css";
import { cfcActiveData } from "../../../API/activefoodbanks0425";
import { useEffect } from "react";
import { borough } from "../adapters/filter-adapter";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [foodbank, setFoodBank] = useState([]);
  const [boro, setBro] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const boro = await borough();
      setBro(boro);
    };
    doFetch();
  }, []);

  const fetchData = (value) => {
    const results = boro.filter((item) =>
      // it will lowercase them and look for them
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(results);
    console.log(results);
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
          {results.map((item, index) => (
            <li
              className="search-result"
              key={index}
              onClick={() => {
                clickedFoodBank(results[index]);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
