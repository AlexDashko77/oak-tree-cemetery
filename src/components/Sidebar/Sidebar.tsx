import "./Sidebar.sass"

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__menu-top">
          <img src="/logo.svg" alt="logo" />
          <div className="sidebar__menu-icon sidebar__menu-icon--active">
            <img src="/case.svg" alt="Company" />
          </div>
          <div className="sidebar__menu-icon">
            <img src="/search.svg" alt="Search" />
          </div>
        </div>

        <div className="sidebar__menu-bottom">
          <div className="sidebar__menu-divider"></div>
          <div className="sidebar__menu-icon">
            <img src="/settings.svg" alt="Settings" />
          </div>
          <div className="sidebar__menu-icon">
            <img src="/signOut.svg" alt="Sign Out" />
          </div>
        </div>
      </div>

      <div className="sidebar__content">
        <div className="sidebar__content-top">  
            <div className="sidebar__company">
                <span className="sidebar__company-name">Oak Tree Cemetery</span>
                <span className="sidebar__company-role">Process Manager</span>
            </div>
            <div className="sidebar__line"></div>
            <div className="sidebar__manage">
                <button className="sidebar__manage-organizations">
                    <img src="/case.svg" alt="Organizations" />
                    <span>Organizations</span>
                    </button>
                <button className="sidebar__manage-contractors">
                    <img src="/contractors.svg" alt="Contractors" />
                    <span>Contractors</span>
                    </button>
                <button className="sidebar__manage-clients">
                    <img src="/clients.svg" alt="Clients" />
                    <span>Clients</span>
                    </button>
            </div>
        </div>
        <span className="sidebar__footer">All Funeral Services © 2015-2025</span>
      </div>
    </aside>
  )
}

export default SideBar
