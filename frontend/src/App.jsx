import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Abouts from "./pages/Abouts/Abouts";
import Contacts from "./pages/Contacts/Contacts";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignPage from "./pages/SignPage/SignPage";
import MainDashBoard from "./components/MainDashBoard/MainDashBoard";
import Profile from "./components/MainDashBoard/Profile";
import YourCart from "./components/MainDashBoard/YourCart";
import EnrolledCourses from "./components/MainDashBoard/EnrolledCourses";
import Settings from "./components/MainDashBoard/Settings";
import { Toaster } from "react-hot-toast";
import SendOTP from "./components/SendOTP/SendOTP";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import OpenRoute from "./components/OpenRoute/OpenRoute";

function App() {
  const { loading } = useSelector((state) => state.ui);

  return (
    <div className="w-[100vw] h-auto overflow-x-hidden box-border relative z-10 bg-blue-bg">
      {loading && <Loader />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <OpenRoute>
              <SignPage />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <SendOTP />
            </OpenRoute>
          }
        />
        <Route path="/aboutus" element={<Abouts />} />

        <Route path="/contact-us" element={<Contacts />} />
        <Route
          element={
            <ProtectedRoute>
              <MainDashBoard />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route
            path="/dashboard/enrolled-courses"
            element={<EnrolledCourses />}
          />
          <Route path="/dashboard/your-cart" element={<YourCart />} />
          <Route path="/dashboard/setting" element={<Settings />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
