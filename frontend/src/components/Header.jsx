import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid justify-content-center justify-content-md-start">
            <a className="navbar-brand" href="/">
              <img src="gov_bc_logo.svg" alt="BC Gov" width="175" height="47" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
