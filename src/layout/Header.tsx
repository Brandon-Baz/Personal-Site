import React from 'react';
  const Header: React.FC = () => {
    return (
      <header className="game-header">
        <img src='/personal_brand_logo.png' alt="Logo" className="logo" />
        <h1 className="game-title">Brandon Coburn</h1>
        <h2 className="game-subtitle">
          <span className="job-title">Software Engineer</span> | 
          <span className="previous-role"> Veteran |</span>
          <span className="founder-title"> Founder of Bazinga Studios </span>
        </h2>
      </header>
    );
  };

  export default Header;