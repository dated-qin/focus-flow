import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { zhCN } from "../i18n/zh-CN";
import FocusView from "../views/FocusView";
import TasksView from "../views/TasksView";
import StatsView from "../views/StatsView";
import SettingsView from "../views/SettingsView";

function AppRoutes() {
  return (
    <>
      <nav className="top-nav">
        <NavLink to="/tasks" className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}>
          {zhCN.nav.tasks}
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}>
          {zhCN.nav.stats}
        </NavLink>
        <NavLink to="/focus" className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}>
          {zhCN.nav.focus}
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "top-nav__link top-nav__link--active" : "top-nav__link")}
        >
          {zhCN.nav.settings}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TasksView />} />
        <Route path="/stats" element={<StatsView />} />
        <Route path="/focus" element={<FocusView />} />
        <Route path="/settings" element={<SettingsView />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
