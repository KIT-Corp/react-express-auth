import React, { useEffect, useState } from "react";

export default function ReviewsPage() {
  const [userReviews, setUserReviews] = useState([]);
  const [otherReviews, setOtherReviews] = useState([]);

  useEffect(() => {
    // Replace with actual fetch logic
    fetch("/api/reviews/mine")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));

    fetch("/api/reviews/others")
      .then((res) => res.json())
      .then((data) => setOtherReviews(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* NavBar placeholder */}
      <nav className="bg-white shadow p-4 text-lg font-semibold sticky top-0 z-10">
        Reviews
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 max-w-7xl mx-auto">
        {/* Left column - Other reviews */}
        <div>
          <h2 className="text-xl font-bold mb-4">What others are saying</h2>
          <div className="space-y-4">
            {otherReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="text-sm font-semibold">{review.author}</div>
                <div className="text-yellow-500">
                  {"⭐️".repeat(review.rating)}
                </div>
                <p className="mt-1 text-gray-700 text-sm">{review.content}</p>
                <div className="text-xs text-gray-400 mt-2">{review.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Your reviews */}
        <div>
          <h2 className="text-xl font-bold mb-4">Your reviews</h2>
          <div className="space-y-4">
            {userReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md border border-blue-100"
              >
                <div className="text-sm font-semibold">You</div>
                <div className="text-yellow-500">
                  {"⭐️".repeat(review.rating)}
                </div>
                <p className="mt-1 text-gray-700 text-sm">{review.content}</p>
                <div className="text-xs text-gray-400 mt-2">{review.date}</div>
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
