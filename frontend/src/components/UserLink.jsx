// import { Link } from "react-router-dom";

// export default function UserLink({ user }) {
//   return <Link to={`/users/${user.id}`}>{user.username}</Link>;
// }

//Josh Changes//
import { Link } from "react-router-dom";
import "./UserLink.css";

export default function UserLink({ user }) {
  return (
    <Link
      to={`/users/${user.id}`}
      className="user-link"
      title={`View profile for ${user.username}`}
    >
      {user.username}
    </Link>
  );
}
