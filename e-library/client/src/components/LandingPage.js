// WowLandingPage.js

import React from 'react';

function WowLandingPage() {
  return (

    <>
    <div className="page-container">
     <header className="site-header">
        <div className="site-identity">
          <h1><a href="#">E-Library</a></h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>

          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to our E-Library</h2>
          <p>Explore a vast collection of books, read, learn, and enjoy.</p>
          <a href="/register" className="cta-button">Get Started</a>
        </div>
      </section>
    </div>
    </>
  );
}

export default WowLandingPage;
