import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./SearchBar.css";
import { cfcActiveData } from "../../../API/activefoodbanks0425";
import { useEffect } from "react";
import { borough } from "../adapters/filter-adapter";

// export const SearchBar = () => {
//   const [input, setInput] = useState('');
//   const [results, setResults] = useState([]);
//   const [foodbank, setFoodBank] = useState([]);

//   const fetchData = (value) => {
//     const data = Object.values(cfcActiveData);
//     // we are storing our data into results, it will return true if it matches
//     const results = data.filter(item =>
//         // it will lowercase them and look for them
//       item.Program.toLowerCase().includes(value.toLowerCase())
//     );
//     setResults(results);
//     console.log(results)
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };
// const clickedFoodBank = (result) => {
//     setFoodBank(result)
// }
//   let navigate = useNavigate();
//   useEffect(() => {
//     if (foodbank.length !== 0){
//         // console.log("RUAH", foodbank)
//         let path = '/foodBankInfoPage'
//         navigate(path,{state: foodbank})
//     }
//   }, [foodbank])

//   return (
//     <div className="input-wrapper">
//       <input
//         placeholder="type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <div className='results-list'>
//       <ul>
//         {results.map((item, index) => (
//           <li className='search-result' key={index} onClick = {() => {
//             clickedFoodBank(results[index])
//   }
//   }>{item.Program}</li>
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
// };

//Josh changes//

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
  const navigate = useNavigate();

  const fetchData = (value) => {
    const results = boro.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    const data = Object.values(cfcActiveData);
    const filtered = data.filter((item) =>
      item.Program.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const clickedFoodBank = (result) => {
    setFoodBank(result);
  };

  useEffect(() => {
    if (foodbank.length !== 0) {
      navigate("/foodBankInfoPage", { state: foodbank });
    }
  }, [foodbank, navigate]);

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="Search for a food bank program"
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
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((item, index) => (
            <li
              key={index}
              className="search-result"
              onClick={() => clickedFoodBank(item)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter") clickedFoodBank(item);
              }}
            >
              {item.Program}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
