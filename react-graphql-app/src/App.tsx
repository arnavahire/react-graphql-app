import { Login } from "./components/LoginSignup/Login.tsx";
import { News } from "./components/NewsListing/News.tsx";
import { Advisors } from "./components/AdvisorsListing/Advisors.tsx";
import { Home } from "./components/Home/Home.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Logout } from "./components/Logout/Logout.tsx";
import { UserProvider } from "./store/UserContext.tsx";
import { CustomerSegments } from "./components/CustomerSegments/CustomerSegments.tsx";
import { Signup } from "./components/LoginSignup/Signup.tsx";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/header" element={<Header />} />
          <Route path="/segments" element={<CustomerSegments />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
