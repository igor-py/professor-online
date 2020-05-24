import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import instagramLogo from '../images/instagramLogo.png';
import facebookLogo from '../images/facebookLogo.png';
import twitterLogo from '../images/twitterLogo.png';

export default function Footer() {
  return (
    <div id="footerContainer">
      <div id="linksContainer">
        <Link id="link">Quem somos</Link>
        <Link id="link">Ajuda</Link>
        <Link id="link">Contatos</Link>
      </div>
      <div id="imagemCopiryghtContainer">
        <div id="imageContainer">
          <img src={instagramLogo} alt="insta" />
          <img src={facebookLogo} alt="face" />
          <img src={twitterLogo} alt="twit" />
          <div id="copiryghtContainer">
            <label>© 2020 professor online</label>
          </div>
        </div>
      </div>
    </div>
  );
}
