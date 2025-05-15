/** @format */

import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// home is where original users can log in
import Review from './pages/reviews'
import Home from './pages/home';
// loginPage will be for foodBankUsers to log in
import Login from './pages/Login';
// AboutUs will be the about us page 
import AboutUs from './pages/aboutUs';
import Form from './pages/reviewsForm' 
import Page from './pages/infoFoodbank';
// import update from './pages/updateInfo';
import Search from './pages/search'
import SignUpPage from './pages/SignUp';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UserPage from './pages/User';


export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const loadCurrentUser = async () => {
      // we aren't concerned about an error happening here
      const [data] = await checkForLoggedInUser();
      if (data) setCurrentUser(data);
    };
    loadCurrentUser();
  }, [setCurrentUser]);

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
          <Route path="/aboutUs" element= {<AboutUs />} />
          <Route path='/foodBankInfoPage' element= {<Page />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/User" element={<UserPage />} />
          <Route path='/foodbankUser' element={<ifFoodBank />} />
          <Route path='/new' element={<newInfo />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
