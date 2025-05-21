// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import "./SearchBar.css";
// import { cfcActiveData } from "../../../API/activefoodbanks0425";
// import { useEffect } from "react";
// import { borough } from "../adapters/filter-adapter"

// export const SearchBar = () => {
//   const [input, setInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [foodbank, setFoodBank] = useState([]);
//   const [boro, setBro] = useState([]);

//   useEffect(() => {
//     const doFetch = async () => {
//       const boro = await borough();
//       setBro(boro);
//     };
//     doFetch();
//   }, []);
//   const navigate = useNavigate();

//   const fetchData = (value) => {
//     const results = boro.filter((item) =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );

//     const data = Object.values(cfcActiveData);
//     const filtered = data.filter((item) =>
//       item.Program.toLowerCase().includes(value.toLowerCase())
//     );

//     setResults(filtered);
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   const clickedFoodBank = (result) => {
//     setFoodBank(result);
//   };

//   useEffect(() => {
//     if (foodbank.length !== 0) {
//       navigate("/foodBankInfoPage", { state: foodbank });
//     }
//   }, [foodbank, navigate]);

//   return (
//     <div className="input-wrapper">
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//         aria-label="Search for a food bank program"
//       />
//       <div className="results-list">
//         <ul>
//           {results.map((item, index) => (
//             <li
//               className="search-result"
//               key={index}
//               onClick={() => {
//                 clickedFoodBank(results[index]);
//               }}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {results.length > 0 && (
//         <ul className="results-list">
//           {results.map((item, index) => (
//             <li
//               key={index}
//               className="search-result"
//               onClick={() => clickedFoodBank(item)}
//               tabIndex="0"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") clickedFoodBank(item);
//               }}
//             >
//               {item.Program}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

//PT2//

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { cfcActiveData } from "../../../API/activefoodbanks0425";
import { borough } from "../adapters/filter-adapter";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [foodbank, setFoodBank] = useState([]);
  const [boro, setBro] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const doFetch = async () => {
      const boro = await borough();
      setBro(boro);
    };
    doFetch();
  }, []);

  const fetchData = (value) => {
    const filtered = Object.values(cfcActiveData).filter((item) =>
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
    <div className="search-bar-container">
      <div className="input-wrapper">
        <input
          placeholder="Search for a food bank..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Search input"
        />
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
