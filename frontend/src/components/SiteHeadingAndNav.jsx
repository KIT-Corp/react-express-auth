import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import comen from "../images/comentodos.jpg";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <Link to="/" id="logo" className="ct-navbar-logo">
        <img src={comen} />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About</NavLink>
          </li>
          <li>
            <NavLink to="/Search">Search</NavLink>
          </li>

          {currentUser ? (
            <>
              {/* <li>
                <NavLink to="/users" end={true}>
                  Users
                </NavLink>
              </li> */}
              <li>
                <NavLink to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/User">User</NavLink>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

//josh changes 2//
// import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import CurrentUserContext from "../contexts/current-user-context";
// import "./SiteHeadingAndNav.css";

// export default function SiteHeadingAndNav() {
//   const { currentUser } = useContext(CurrentUserContext);

//   return (
//     <header className="site-header">
//       <a id="logo" className="site-logo fade-in" href="/">
//         Comen Todos
//       </a>
//       <nav className="site-nav">
//         <ul className="nav-list">
//           <li>
//             <NavLink to="/" className="nav-link" end>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/aboutUs" className="nav-link">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Search" className="nav-link">
//               Search
//             </NavLink>
//           </li>

//           {currentUser ? (
//             <>
//               <li>
//                 <NavLink to="/users" end className="nav-link">
//                   Users
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={`/users/${currentUser.id}`} className="nav-link">
//                   {currentUser.username}
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to="/Login" className="nav-link">
//                   Login
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/sign-up" className="nav-link">
//                   Sign Up
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/User" className="nav-link">
//                   User
//                 </NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }
