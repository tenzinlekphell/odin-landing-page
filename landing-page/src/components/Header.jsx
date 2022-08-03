import React from 'react';
import kirbyIcon from '../images/kirby-icon';

const Header = () => {
  return (
    <div className="header">
      <nav className="header-container">
        <h1 id="header-logo">Kirby Website</h1>
        <div className="link-container">
          <a href="/" className="header-link">
            Header Link One
          </a>
          <a href="/" className="header-link">
            Header Link Two
          </a>
          <a href="/" className="header-link">
            Header Link Three
          </a>
        </div>
      </nav>
      <div className="main-container">
        <main id="main-text">
          <h1 id="hero-main-text">This website is awesome</h1>
          <p id="header-secondary-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            blanditiis odit similique eos ex accusamus omnis ea ipsam iste
            recusandae. Magni, odio? Provident, animi? Commodi sit fugit
            reiciendis incidunt dignissimos consectetur doloribus magnam numquam
            eaque? Provident nam voluptatibus velit dolorem accusantium quaerat
            tempore maiores, nihil necessitatibus veritatis placeat voluptates
            quo cum aperiam quod voluptatum fuga pariatur saepe quisquam quos
            neque quis ut. Veritatis amet laborum consectetur id fugiat sed
            numquam, odit suscipit delectus atque consequatur ducimus illum ad
            reprehenderit corporis animi voluptate quos? Quod vel tempora illo
            velit pariatur dolores repudiandae esse sequi, impedit totam optio
            vitae culpa. Sunt, nihil.
          </p>
          <button id="btn-header">Sign Up</button>
        </main>
        <img src={kirbyIcon} alt="" id="header-icon" />
      </div>
    </div>
  );
};

export default Header;
