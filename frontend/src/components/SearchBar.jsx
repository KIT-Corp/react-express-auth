import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './SearchBar.css';
import { cfcActiveData } from '../../../API/activefoodbanks0425';
import { useEffect } from 'react';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [foodbank, setFoodBank] = useState([]);

  const fetchData = (value) => {
    const data = Object.values(cfcActiveData);
    // we are storing our data into results, it will return true if it matches
    const results = data.filter(item =>
        // it will lowercase them and look for them
      item.Program.toLowerCase().includes(value.toLowerCase())
    );
    setResults(results);
    console.log(results)
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
const clickedFoodBank = (result) => {
    setFoodBank(result)
}
  let navigate = useNavigate();
  useEffect(() => {
    if (foodbank.length !== 0){
        // console.log("RUAH", foodbank)
        let path = '/foodBankInfoPage'
        navigate(path,{state: foodbank})
    }
  }, [foodbank])


  return (
    <div className="input-wrapper">
      <input
        placeholder="type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className='results-list'> 
      <ul>
        {results.map((item, index) => (
          <li className='search-result' key={index} onClick = {() => {
            clickedFoodBank(results[index])

        //    let path = '/foodBankInfoPage'
        //     navigate(path, {results[index]})
//    console.log(foodbank)
  }
  }>{item.Program}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};
