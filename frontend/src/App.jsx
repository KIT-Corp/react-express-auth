/** @format */

import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// home is where original users can log in
import Review from "./pages/reviews";
import Home from "./pages/home";
// loginPage will be for foodBankUsers to log in
import Login from "./pages/Login";
// AboutUs will be the about us page
import AboutUs from "./pages/AboutUs";
// import Review from './pages/foodbankReviews';
import Page from "./pages/InfoFoodBank";
import Review from "./pages/Reviews";
import Form from "./pages/ReviewsForm";
// import update from './pages/updateInfo';
import Search from "./pages/Search";
import SignUpPage from "./pages/SignUp";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";
import NotFoundPage from "./pages/NotFound";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UserPage from "./pages/User";
import FoodBankSignUp from "./pages/FoodBankSignUp";

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    const loadCurrentUser = async () => {
      // we aren't concerned about an error happening here
      const [data] = await checkForLoggedInUser();
      if (data) setCurrentUser(data);
    };
    loadCurrentUser();
  }, [setCurrentUser]);

  // 👇 This is where the title-setting effect goes
  useEffect(() => {
    const titleMap = {
      "/": "Home | Comen Todos",
      "/search": "Search | Comen Todos",
      "/aboutus": "About Us | Comen Todos",
      "/foodbankinfopage": "Food Bank Info | Comen Todos",
      "/login": "Log In | Comen Todos",
      "/sign-up": "Sign Up | Comen Todos",
      '/users/:id"': "My Page| Comen Todos",
      // '/newInfo': 'New Info | Comen Todos',
      "/*": "Not Found | Comen Todos",
    };

    document.title = titleMap[location.pathname] || "Comen Todos";
  }, [location.pathname]);

  return (
    <>
      <SiteHeadingAndNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/update" element={<update />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/foodbankinfopage" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/foodbanksignup" element={<FoodBankSignUp />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/foodbankuser" element={<ifFoodBank />} />
          {/* <Route path="/new" element={<newInfo />} /> */}
          {/* <Route path="/users/:id" element={<UserPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
