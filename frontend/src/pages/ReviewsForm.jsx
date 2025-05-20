import { useState } from "react";

export default function ReviewsForm() {
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      rating,
      date,
      location,
      title,
      content,
    });
    // You can hook this into createReview()
  };

  return (
    <>
      <h1>Review Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rate</label>
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: num <= rating ? "gold" : "gray",
                }}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <label>Date of visit</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select a location</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>

        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your review..."
          ></textarea>
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={() => window.history.back()}>
          Cancel
        </button>
      </form>
    </>
  );
}

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { useState } from "react";

// export default function Form() {
//   return (
//     <>
//       <h1>Leave a review</h1>

//       <form>
//         <h1>food bank name</h1>
//         <input> </input>

//         <p>Average wait time</p>
//         <input></input>

//         <p>Comments:</p>
//         <input></input>
//       </form>
//       <button>Submit</button>
//       <button>Cancel</button>
//     </>
//   );
// }
