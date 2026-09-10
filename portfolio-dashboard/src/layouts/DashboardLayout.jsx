import { NavLink, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <nav aria-label="Dashboard navigation">
          <NavLink to="/dashboard">Overview</NavLink>
          <NavLink to="/dashboard/profile">Profile</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>
      <section className="dashboard-content">
        <Outlet />
      </section>
    </div>
  )
}

export default DashboardLayout