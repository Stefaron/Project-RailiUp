import { NavLink } from "react-router-dom";
import { Home, User, BookOpen, List, History, Award, Menu, X } from "lucide-react";

function Sidebar({ collapsed, toggleSidebar }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">RalliUp Tennis</h2>
        <button className="toggle-button" onClick={toggleSidebar}>
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard">
              <Home size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">
              <User size={20} />
              <span>My Profile</span>
            </NavLink>
          </li>
          <li>
            <a href="/dashboard/my-classes">
              <BookOpen size={20} />
              <span>My Classes</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/available-classes">
              <List size={20} />
              <span>Available Classes</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/history">
              <History size={20} />
              <span>Training History</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/programs">
              <Award size={20} />
              <span>Training Programs</span>
            </a>
          </li>
          <li className="logout">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Logout</span>
            </a>
          </li>{" "}
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;
