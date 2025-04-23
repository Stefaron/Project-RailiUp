import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AuthForms from "./components/AuthForms";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./components/userDashboard/DashboardPage";
import ProfilePage from "./components/userDashboard/ProfilePage";
import MyClassesPage from "./components/userDashboard/MyClassesPage";
import HistoryPage from "./components/userDashboard/HistoryPage";
import ProgramsPage from "./components/userDashboard/ProgramsPage";
import AvailableClassesPage from "./components/userDashboard/AvailableClassesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth" element={<AuthForms />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="my-classes" element={<MyClassesPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="available-classes" element={<AvailableClassesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
