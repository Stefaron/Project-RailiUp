import React, { useState } from "react";
import "../../UserDashboard.css";
import { Calendar, Clock, Award, Book, ChevronRight, Home, User, BookOpen, List, History, Menu, X, Bell } from "lucide-react";
import avatar from "../../assets/hero-2.jpg";
import lesson1 from "../../assets/coach-1.jpg";
import lesson2 from "../../assets/coach-2.jpg";
import lesson3 from "../../assets/coach-3.jpg";

function DashboardPage() {
  const [currentUser, setCurrentUser] = useState({
    name: "Sarah Cooper",
    avatar: avatar,
    totalClasses: 24,
    weekSchedule: 3,
    lastSession: "April 18, 2025",
    activeProgram: "Intermediate Backhand Mastery",
  });

  const recommendedPrograms = [
    {
      title: "Advanced Serve Techniques",
      trainer: "Coach Patrick",
      level: "Advanced",
      duration: "4 weeks",
      image: lesson1,
    },
    {
      title: "Footwork Fundamentals",
      trainer: "Coach Lindsay",
      level: "All Levels",
      duration: "2 weeks",
      image: lesson2,
    },
    {
      title: "Strategic Doubles Play",
      trainer: "Coach Gigi",
      level: "Intermediate",
      duration: "3 weeks",
      image: lesson3,
    },
  ];

  const weeklySchedule = [
    {
      day: "Monday",
      date: "Apr 22",
      sessions: [{ time: "18:00 - 19:30", title: "Group Training: Forehand Focus", trainer: "Coach Paul" }],
    },
    { day: "Tuesday", date: "Apr 23", sessions: [] },
    {
      day: "Wednesday",
      date: "Apr 24",
      sessions: [{ time: "17:30 - 18:30", title: "Private Lesson", trainer: "Coach Lindsay" }],
    },
    { day: "Thursday", date: "Apr 25", sessions: [] },
    {
      day: "Friday",
      date: "Apr 26",
      sessions: [{ time: "19:00 - 20:30", title: "Match Practice", trainer: "Coach Patrick" }],
    },
    { day: "Saturday", date: "Apr 27", sessions: [] },
    { day: "Sunday", date: "Apr 28", sessions: [] },
  ];
  return (
    <>
      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome back, {currentUser.name} 👋</h2>
          <p>Here's what's happening with your tennis training</p>
        </div>

        {/* Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-icon">
              <BookOpen size={24} />
            </div>
            <div className="info-card-content">
              <h3>{currentUser.totalClasses}</h3>
              <p>Total Classes Joined</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <Calendar size={24} />
            </div>
            <div className="info-card-content">
              <h3>{currentUser.weekSchedule}</h3>
              <p>Training Sessions This Week</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <Clock size={24} />
            </div>
            <div className="info-card-content">
              <h3>{currentUser.lastSession}</h3>
              <p>Last Training Session</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <Award size={24} />
            </div>
            <div className="info-card-content">
              <h3>Active Program</h3>
              <p>{currentUser.activeProgram}</p>
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <section className="schedule-section">
          <div className="section-header">
            <h2>My Weekly Schedule</h2>
            <a href="#full-schedule" className="view-all">
              View all <ChevronRight size={16} />
            </a>
          </div>
          <div className="weekly-schedule">
            {weeklySchedule.map((day, index) => (
              <div className="schedule-day" key={index}>
                <div className="day-header">
                  <h3>{day.day}</h3>
                  <span>{day.date}</span>
                </div>
                <div className="day-content">
                  {day.sessions.length > 0 ? (
                    day.sessions.map((session, idx) => (
                      <div className="session" key={idx}>
                        <div className="session-time">{session.time}</div>
                        <div className="session-details">
                          <h4>{session.title}</h4>
                          <p>{session.trainer}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-session">No sessions</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Programs */}
        <section className="recommended-section">
          <div className="section-header">
            <h2>Recommended for You</h2>
            <a href="#all-programs" className="view-all">
              View all <ChevronRight size={16} />
            </a>
          </div>
          <div className="recommended-programs">
            {recommendedPrograms.map((program, index) => (
              <div className="program-card" key={index}>
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p className="program-trainer">{program.trainer}</p>
                  <div className="program-meta">
                    <span className="program-level">{program.level}</span>
                    <span className="program-duration">{program.duration}</span>
                  </div>
                  <button className="program-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
export default DashboardPage;
