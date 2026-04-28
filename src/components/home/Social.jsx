import React from "react";

const Social = () => {
  return (
    /*============ Redes Sociais ============*/
    <div className="home__social">
      <a href="https://www.instagram.com/gabrielalves.s/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>

      <a href="https://gabrielalvesgit.github.io/Loading/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-dribbble"></i>
      </a>

      <a href="https://github.com/GabrielAlvesGit" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
      
      <a href="https://www.youtube.com/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  )
}

export default Social;