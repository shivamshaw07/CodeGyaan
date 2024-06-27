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
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import OpenRoute from "./components/OpenRoute/OpenRoute";
import MyCourses from "./components/MainDashBoard/Instructor/MyCourses/MyCourses";
import MainAddCourse from "./components/MainDashBoard/Instructor/AddCourse/MainAddCourse";
import EditCourse from "./components/MainDashBoard/Instructor/EditCourses/EditCourse";
import CourseOverView from "./pages/CourseOverView/CourseOverView";
import Instructor from "./components/MainDashBoard/Instructor/Dashboard/Instructor";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/ViewCourse/VideoDetails";
import { ACCOUNT_TYPE } from "./utils/constant";
import { useEffect, useState } from "react";
import { checkToken, logout } from "./servies/operations/authOpertaion";

function App() {
  const { loading } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.profile);
  const { accountType } = useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();  
  // useEffect(() => {
  //   console.log("token : ", token);
  //   const verifyToken = async () => {
  //     if (!token) {
  //       dispatch(logout());
  //     } else {
  //       let validToken = await checkToken(token);
  //       if (!validToken) {
  //         dispatch(logout());
  //       }
  //     }
  //   };
  //   verifyToken();
  // }, [dispatch, token]);
  return (
    <div className="max-w-[100vw] h-auto overflow-x-hidden box-border relative z-10 bg-blue-bg">
      {loading && <Loader />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
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

        <Route path="/course/:courseName/:id" element={<CourseOverView />} />
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
              <Route
                path="/dashboard/add-courses"
                element={<MainAddCourse />}
              />
              <Route
                path="/dashboard/edit-course/:id"
                element={<EditCourse />}
              />
              <Route path="/dashboard/dashboard" element={<Instructor />} />{" "}
              <Route path="/dashboard/my-courses" element={<MyCourses />} />{" "}
            </>
          )}
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <ViewCourse />
            </ProtectedRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
