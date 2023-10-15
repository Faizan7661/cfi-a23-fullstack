import React from 'react';

function HomePage() {
  
  return (

    <>
     <div className="page-container">
     <header className="site-header">
        <div className="site-identity">
          <h1><a href="#">E-Library</a></h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav">
            <li><a href="/addBook">Add Book</a></li>
            <li><a href="/editBook">Edit Book</a></li>
            <li><a href="/deleteBook">Delete Book</a></li>
            <li><a href="/allBooks">All Books</a></li>
            <li><a href="/singleBook">Search Book</a></li>
            <li><a href="/logout">Logout</a></li>

          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to our E-Library</h2>
          <p>Explore a vast collection of books, read, learn, and enjoy.</p>
          <a href="/addBook" className="cta-button">Get Started</a>
        </div>
      </section>
    </div>
    </>
  );
}

export default HomePage;
