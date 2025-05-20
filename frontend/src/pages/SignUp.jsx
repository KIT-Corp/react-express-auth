/** @format */

import { SignupForm } from "../components/signup-form";
import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { registerUser } from "../adapters/auth-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isFoodBank, setIsFoodBank] = useState(false);

  // users shouldn't be able to see the sign up page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    // if (!username || !password)
    //   return setErrorText("Missing username or password");

    const [user, error] = await registerUser({
      username,
      password,
      email,
      is_food_bank: isFoodBank,
      age: age === "" ? null : parseInt(age, 10),
      zipcode: zipcode.trim(),
    });
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
    else if (name === "email") setEmail(value);
    else if (name === "age") setAge(value);
    else if (name === "zipcode") setZipcode(value);
    else if (name === "isFoodBank") setIsFoodBank(checked);
  };

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <SignupForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            age={age}
            setAge={setAge}
            zipcode={zipcode}
            setZipcode={setZipcode}
            isFoodBank={isFoodBank}
            setIsFoodBank={setIsFoodBank}
            handleSubmit={handleSubmit}
            errorText={errorText}
          />
          {!!errorText && <p className="text-sm text-red-500">{errorText}</p>}
          <p>
            Already have an account with us?{" "}
            <Link to="/login">
              <u>Log in!</u>
            </Link>
          </p>
          <p>
            {/* TEMPORARY LINK UNTIL CHECKBOX FUNTIONALITY WORKS*/}
            Signing up as a Food Bank?{" "}
            <Link to="/foodbanksignup">
              <u>Sign up here!</u>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
