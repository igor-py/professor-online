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
        <Link id="link1">Quem somos</Link>
        <Link id="link2">Ajuda</Link>
        <Link id="link3">Contatos</Link>
      </div>
      <div id="imagemCopiryghtContainer">
        <div id="imageContainer">
          <img src={instagramLogo} alt="insta" className="logos-social" />
          <img src={facebookLogo} alt="face" className="logos-social" />
          <img src={twitterLogo} alt="twit" className="logos-social" />
          <div id="copiryghtContainer">
            <label>© 2020 professor online</label>
          </div>
        </div>
      </div>
    </div>
  );
}
