import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
    //Evento de exbir o Scroll quando o usuario estiver scrolando 
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".scrollup");
      //Qquando o Scroll tiver em 560 viewport vai exibir 
      if (this.scrollY >= 560) scrollUp.classList.add
      ("show-scroll"); 
      else scrollUp.classList.remove("show-scroll");
    })

    return (
      <a href="#" className='scrollup'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
      </a>
    )
}

export default ScrollUp;  