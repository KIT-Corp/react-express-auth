import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { registerUser } from "../adapters/auth-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [foodBank, setfoodBank] = useState('');


  // users shouldn't be able to see the sign up page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await registerUser({  is_food_bank,
      username,
      email,
      age,
      passwordHash,
      zipcode });
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
  const { name, value } = event.target;
  if (name === 'username') setUsername(value);
  else if (name === 'password') setPassword(value);
  else if (name === 'email') setEmail(value);
  else if (name === 'age') setAge(value);
  else if (name === 'foodBank') setfoodBank(value);
};


  return <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
      <h2 id="create-heading">Create New User</h2>
      <label htmlFor="username">Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
      />

      <label htmlFor="password">Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

        <label htmlFor="email">Email</label>
      <input
        autoComplete="off"
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />

        <label htmlFor="age">Age</label>
      <input
        autoComplete="off"
        type="age"
        id="age"
        name="age"
        onChange={handleChange}
        value={age}
      />

        <label htmlFor="foodBank">Are you a food bank?</label>
      <input
        autoComplete="off"
        type="foodBank"
        id="foodBank"
        name="foodBank"
        onChange={handleChange}
        value={foodBank}
      />

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button>Sign Up Now!</button>
    </form>
    {!!errorText && <p>{errorText}</p>}
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
  </>;
}
