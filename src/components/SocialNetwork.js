import React from 'react';

const SocialNetwork = () => {

  // const anim = () => {
  //   let navLinks = document.querySelectorAll('.social-network a');

  //   navLinks.forEach(link => {
  //     link.addEventListener('mouseover', (e) => {
  //       let attrX = e.offsetX - 20;
  //       let attrY = e.offsetY - 13;

  //       link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
  //     })
  //     link.addEventListener('mouseleave', () => {
  //       link.style.transform = '';
  //     })
  //   })
  // }

   const handleAnimeSociaux = ()  => {
         let navSociauxs = document.querySelectorAll('.social-network a');

         navSociauxs.forEach(link => {
            console.log(link);
            link.addEventListener('mouseover', (e) =>{
                let attrx = e.offsetX - 20;
                let attry = e.offsetY - 13;

                link.style.transform= `translate(${attrx}px, ${attry}px)`;
            })

            link.addEventListener('mouseout', () =>{
                link.style.transform='';
            })
         })

    }

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://www.facebook.com"
          target="_blank" rel="noopener noreferrer"
          className="hover" onMouseOver={handleAnimeSociaux} >
          <li><i className="fab fa-facebook-f"></i></li>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={handleAnimeSociaux} >
          <li><i className="fab fa-twitter"></i></li>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={handleAnimeSociaux} >
          <li><i className="fab fa-instagram"></i></li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;