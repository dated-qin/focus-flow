import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import TasksView from "../views/TasksView";
import StatsView from "../views/StatsView";
import SettingsView from "../views/SettingsView";

function AppRoutes() {
  return (
    <>
      <nav className="top-nav">
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}>
          Tasks
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}>
          Stats
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}
        >
          Settings
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TasksView />} />
        <Route path="/stats" element={<StatsView />} />
        <Route path="/settings" element={<SettingsView />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
