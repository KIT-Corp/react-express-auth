import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import "../styles/userPageStyles.css";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  // const id = currentUser.id;
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    console.log(id);
    console.log(currentUser);

    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setError(error);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };

  if (error)
    return (
      <p>Sorry, there was a problem loading user. Please try again later.</p>
    );

  if (!userProfile) return null;

  // When we update the username, the userProfile state won't change but the currentUser state will.
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  return (
    <div className="user-container">
      <div className="greeting-section">
        <h2>👤 GoodMorning {profileUsername}!</h2>
        {/* <span className="notification-icon">📨</span> */}
      </div>

      <div className="yourbank">
        <h2>Your Food Bank:</h2>
      </div>

      <div className="card-btnHolder">
        <div className="foodbank-card">
          <h2>Food Bank #2</h2>
          <br></br>
          <div className="user-fb-info">
            <p>Open: 6 AM - 6PM</p>
            <p>
              Address: 123 Sesame St,
              <br />
              Brooklyn, NY
            </p>
            <p>Rating: ⭐⭐</p>
            <br></br>
            <br></br>
            <br></br>
            <button className="userBtn">Change Bank?</button>
          </div>
        </div>

        <div className="btn-holder">
          {isCurrentUserProfile && (
            <>
              <UpdateUsernameForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </>
          )}
        </div>
      </div>
      <div className="footer-btns">
        <button
          className="userBtn"
          onClick={() =>
            navigate("/Form", {
              state: {
                id: 2,
                name: "Food Bank #2",
                food_bank_street: "123 Sesame St",
                food_bank_borough: "Brooklyn",
                food_bank_zip: "11201",
              },
            })
          }
        >
          Leave a review?
        </button>
        <button class="userBtn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
//         <>
//           <UpdateUsernameForm
//             currentUser={currentUser}
//             setCurrentUser={setCurrentUser}
//           />
//           <button onClick={handleLogout}>Log Out</button>
//         </>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }
