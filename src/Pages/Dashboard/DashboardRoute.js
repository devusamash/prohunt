import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import UserList from "./User List/UserList";
import DashboardHome from "./Dashboard Home/DashboardHome";
import User from "./User/User";
import NewUser from "./New User/NewUser";
import GigList from "./Gig List/GigList";
import Gig from "./Gig/Gig";
import NewGig from "./New Gig/NewGig";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../../App.css";

const DashboardRoute = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<DashboardHome />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser/" element={<NewUser />} />
          <Route path="/gigs/" element={<GigList />} />
          <Route path="/gig/:gigId" element={<Gig />} />
          <Route path="/newGig/" element={<NewGig />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardRoute;
