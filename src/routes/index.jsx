import { Link, Navigate, Route, Routes } from "react-router-dom";
import TasksView from "../views/TasksView";
import StatsView from "../views/StatsView";
import SettingsView from "../views/SettingsView";

function AppRoutes() {
  return (
    <>
      <nav className="top-nav">
        <Link to="/tasks">Tasks</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/settings">Settings</Link>
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
