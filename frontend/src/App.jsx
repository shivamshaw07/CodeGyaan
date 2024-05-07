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
import Dashboard from "./components/MainDashBoard/Instructor/Dashboard/Dashboard";
import MyCourses from "./components/MainDashBoard/Instructor/MyCourses/MyCourses";
import MainAddCourse from "./components/MainDashBoard/Instructor/AddCourse/MainAddCourse";
import EditCourse from "./components/MainDashBoard/Instructor/EditCourses/EditCourse";

function App() {
  const { loading } = useSelector((state) => state.ui);
  const { accountType } = useSelector((state) => state.profile);

  return (
    <div className="max-w-[100vw] h-auto overflow-x-hidden box-border relative z-10 bg-blue-bg">
      {loading && <Loader />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Home/>} />
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
          <Route path="/dashboard/setting" element={<Settings />} />
          {accountType === "Student" && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/your-cart" element={<YourCart />} />{" "}
            </>
          )}
          {accountType === "Instructor" && (
            <>
              <Route path="/dashboard/add-courses" element={<MainAddCourse />} />
              <Route path="/dashboard/edit-course/:id" element={<EditCourse/>}/>
              <Route path="/dashboard/dashboard" element={<Dashboard />} />{" "}
              <Route path="/dashboard/my-courses" element={<MyCourses />} />{" "}
            </>
          )}
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
