import React, { useEffect, useState } from "react";
import { getUser } from "../adapters/user-adapter";
import { getFoodBankReviews } from "../adapters/review-adapters";
import { useLocation } from "react-router-dom";
import "../styles/reviewsPage.css";

export default function ReviewsPage() {
  const location = useLocation();
  const [otherReviews, setOtherReviews] = useState([]);

  const foodbank = location.state;

  useEffect(() => {
    const fetchReviewsAndUsers = async () => {
      const [reviews, error] = await getFoodBankReviews(foodbank.id);
      if (error) {
        console.warn("Error fetching reviews:", error);
        return;
      }

      // Fetch all users for each review
      const mergedData = await Promise.all(
        reviews.map(async (review) => {
          const [userData, userError] = await getUser(review.user_id);
          const reviewAndUsers = { ...review, user: userData };
          if (userError) {
            console.warn("Error fetching user:", userError);
            return { ...review, user: null };
          }
          return { ...review, user: userData };
        })
      );

      setOtherReviews(mergedData);
      console.log("Fetched merged reviews:", mergedData);
    };

    fetchReviewsAndUsers();
  }, [foodbank.id]);

  return (
    <div className="page">
      <div className="top-half">
        <div className="h1-btn">
          <h1>Reviews</h1>
          <p>Over {otherReviews.length} reviews!</p>
        </div>
        <div>
          <button>
            <div className="writeReview">
              <i className="pencil-Icon">
                <img src="https://static-00.iconduck.com/assets.00/edit-icon-1022x1024-kes437mc.png"></img>
              </i>
              <p>Write a review!</p>
            </div>
          </button>
        </div>
      </div>

      <br></br>

      <div className="bottom">
        {/* Left column - Other reviews */}
        <div>
          <h2 className="bottomTitle">What others are saying</h2>
          <div className="review-tab">
            {otherReviews.map((review, index) => (
              <div key={index} className="reviewBlock">
                <div className="username">{review.user.username}</div>
                <div className="date">{review.created_at.slice(0, 10)}</div>
                <div className="stars">{"⭐️".repeat(5)}</div>
                <div className="content">{review.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Review () {

//     return <>
//         <div className="reviewInput">
//             <p>User 1:</p>
//             <p>I went to Sesame Food Bank. My friend, Elmo, got fired. Sad.</p>
//         </div>
//         <div className="commentInput">
//             <p>Would you like to reply to User 1?</p>
//             <input className="inputForm" placeholder="Type a reply here" />
//         </div>

//         <div className="reviewInput">
//             <p>User 2:</p>
//             <p>I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men. - Amen! Hallelujah! Students, faculty, distinguished bees, please welcome
//                 Dean Buzzwell. Welcome, New Hive City graduating class of... ...9:15. That concludes our ceremonies. And begins your career at Honex Industries! Will we pick our job today? I heard it's just orientation. Heads up! Here we go. Keep your hands and antennas inside the tram at all times. - Wonder what it'll be like?
//                 - A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. This is it! Wow. Wow. We know that you, as a bee,
//             </p>
//         </div>
//          <div className="commentInput">
//             <p>Current User</p>
//             <p>- You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way.</p>
//         </div>

//         <div className="reviewInput">
//             <p>User 3:</p>
//             <p>According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black.
//             </p>
//         </div>
//         <div className="commentInput">
//             <p>Current User</p>
//             <p>Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? - Barry? - Adam? - Can you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Y
//                 our father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah.</p>
//         </div>

//         </>
// }
