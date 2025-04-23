// import React, { useState } from "react";
// import "./UserDashboard.css";
// import { Calendar, Clock, Award, Book, ChevronRight, Home, User, BookOpen, List, History, Menu, X, Bell } from "lucide-react";
// import avatar from "../../assets/hero-2.jpg";
// import lesson1 from "../../assets/coach-1.jpg";
// import lesson2 from "../../assets/coach-2.jpg";
// import lesson3 from "../../assets/coach-3.jpg";

// function UserDashboard() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [currentUser, setCurrentUser] = useState({
//     name: "Sarah Cooper",
//     avatar: avatar,
//     totalClasses: 24,
//     weekSchedule: 3,
//     lastSession: "April 18, 2025",
//     activeProgram: "Intermediate Backhand Mastery",
//   });

//   const recommendedPrograms = [
//     {
//       title: "Advanced Serve Techniques",
//       trainer: "Coach Patrick",
//       level: "Advanced",
//       duration: "4 weeks",
//       image: lesson1,
//     },
//     {
//       title: "Footwork Fundamentals",
//       trainer: "Coach Lindsay",
//       level: "All Levels",
//       duration: "2 weeks",
//       image: lesson2,
//     },
//     {
//       title: "Strategic Doubles Play",
//       trainer: "Coach Gigi",
//       level: "Intermediate",
//       duration: "3 weeks",
//       image: lesson3,
//     },
//   ];

//   const weeklySchedule = [
//     {
//       day: "Monday",
//       date: "Apr 22",
//       sessions: [{ time: "18:00 - 19:30", title: "Group Training: Forehand Focus", trainer: "Coach Paul" }],
//     },
//     { day: "Tuesday", date: "Apr 23", sessions: [] },
//     {
//       day: "Wednesday",
//       date: "Apr 24",
//       sessions: [{ time: "17:30 - 18:30", title: "Private Lesson", trainer: "Coach Lindsay" }],
//     },
//     { day: "Thursday", date: "Apr 25", sessions: [] },
//     {
//       day: "Friday",
//       date: "Apr 26",
//       sessions: [{ time: "19:00 - 20:30", title: "Match Practice", trainer: "Coach Patrick" }],
//     },
//     { day: "Saturday", date: "Apr 27", sessions: [] },
//     { day: "Sunday", date: "Apr 28", sessions: [] },
//   ];

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//         <div className="sidebar-header">
//           <h2 className="logo">RalliUp Tennis</h2>
//           <button className="toggle-button" onClick={toggleSidebar}>
//             {collapsed ? <Menu size={20} /> : <X size={20} />}
//           </button>
//         </div>

//         <nav className="sidebar-nav">
//           <ul>
//             <li className="active">
//               <a href="#dashboard">
//                 <Home size={20} />
//                 <span>Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#profile">
//                 <User size={20} />
//                 <span>My Profile</span>
//               </a>
//             </li>
//             <li>
//               <a href="#my-classes">
//                 <BookOpen size={20} />
//                 <span>My Classes</span>
//               </a>
//             </li>
//             <li>
//               <a href="#available-classes">
//                 <List size={20} />
//                 <span>Available Classes</span>
//               </a>
//             </li>
//             <li>
//               <a href="#history">
//                 <History size={20} />
//                 <span>Training History</span>
//               </a>
//             </li>
//             <li>
//               <a href="#programs">
//                 <Award size={20} />
//                 <span>Training Programs</span>
//               </a>
//             </li>
//             <li className="logout">
//               <a href="#logout">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
//                   <polyline points="16 17 21 12 16 7" />
//                   <line x1="21" y1="12" x2="9" y2="12" />
//                 </svg>
//                 <span>Logout</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Top Header */}
//         <header className="top-header">
//           <div className="header-left">
//             <button className="mobile-menu-toggle" onClick={toggleSidebar}>
//               <Menu size={24} />
//             </button>
//             <h1>Dashboard</h1>
//           </div>
//           <div className="header-right">
//             <div className="notifications">
//               <Bell size={20} />
//               <span className="notification-dot"></span>
//             </div>
//             <div className="user-avatar">
//               <img src={currentUser.avatar} alt="User Avatar" />
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           <div className="welcome-section">
//             <h2>Welcome back, {currentUser.name} 👋</h2>
//             <p>Here's what's happening with your tennis training</p>
//           </div>

//           {/* Info Cards */}
//           <div className="info-cards">
//             <div className="info-card">
//               <div className="info-card-icon">
//                 <BookOpen size={24} />
//               </div>
//               <div className="info-card-content">
//                 <h3>{currentUser.totalClasses}</h3>
//                 <p>Total Classes Joined</p>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-card-icon">
//                 <Calendar size={24} />
//               </div>
//               <div className="info-card-content">
//                 <h3>{currentUser.weekSchedule}</h3>
//                 <p>Training Sessions This Week</p>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-card-icon">
//                 <Clock size={24} />
//               </div>
//               <div className="info-card-content">
//                 <h3>{currentUser.lastSession}</h3>
//                 <p>Last Training Session</p>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-card-icon">
//                 <Award size={24} />
//               </div>
//               <div className="info-card-content">
//                 <h3>Active Program</h3>
//                 <p>{currentUser.activeProgram}</p>
//               </div>
//             </div>
//           </div>

//           {/* Weekly Schedule */}
//           <section className="schedule-section">
//             <div className="section-header">
//               <h2>My Weekly Schedule</h2>
//               <a href="#full-schedule" className="view-all">
//                 View all <ChevronRight size={16} />
//               </a>
//             </div>
//             <div className="weekly-schedule">
//               {weeklySchedule.map((day, index) => (
//                 <div className="schedule-day" key={index}>
//                   <div className="day-header">
//                     <h3>{day.day}</h3>
//                     <span>{day.date}</span>
//                   </div>
//                   <div className="day-content">
//                     {day.sessions.length > 0 ? (
//                       day.sessions.map((session, idx) => (
//                         <div className="session" key={idx}>
//                           <div className="session-time">{session.time}</div>
//                           <div className="session-details">
//                             <h4>{session.title}</h4>
//                             <p>{session.trainer}</p>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="no-session">No sessions</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Recommended Programs */}
//           <section className="recommended-section">
//             <div className="section-header">
//               <h2>Recommended for You</h2>
//               <a href="#all-programs" className="view-all">
//                 View all <ChevronRight size={16} />
//               </a>
//             </div>
//             <div className="recommended-programs">
//               {recommendedPrograms.map((program, index) => (
//                 <div className="program-card" key={index}>
//                   <div className="program-image">
//                     <img src={program.image} alt={program.title} />
//                   </div>
//                   <div className="program-content">
//                     <h3>{program.title}</h3>
//                     <p className="program-trainer">{program.trainer}</p>
//                     <div className="program-meta">
//                       <span className="program-level">{program.level}</span>
//                       <span className="program-duration">{program.duration}</span>
//                     </div>
//                     <button className="program-button">View Details</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // 👈 Dynamic content placeholder
import { Menu, X, Bell } from "lucide-react";
import avatar from "../assets/hero-2.jpg";
import Sidebar from "./userDashboard/SIdebar";
import "../UserDashboard.css";

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const currentUser = {
    name: "Sarah Cooper",
    avatar: avatar,
  };

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="dashboard-container">
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      <div className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="mobile-menu-toggle" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <h1>Dashboard</h1>
          </div>
          <div className="header-right">
            <div className="notifications">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </div>
            <div className="user-avatar">
              <img src={currentUser.avatar} alt="User Avatar" />
            </div>
          </div>
        </header>

        {/* Dynamic page content goes here */}
        <div className="dashboard-content">
          <Outlet /> {/* 👈 renders the nested route's content */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
