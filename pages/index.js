
import React from 'react';
import '../styles/globals.css';

const Home = () => (
  <div className="landing-page">
    <h1>WickedGuides</h1>
    <nav>
      <a href="/builds/coldmage"><img src="/icons/coldmage-icon.png" alt="Cold Mage" className="icon" /> Cold Mage</a>
      <a href="/builds/firemage"><img src="/icons/firemage-icon.png" alt="Fire Mage" className="icon" /> Fire Mage</a>
      <a href="/builds/lightningmage"><img src="/icons/lightningmage-icon.png" alt="Lightning Mage" className="icon" /> Lightning Mage</a>
      <a href="/builds/juggernaut"><img src="/icons/juggernaut-icon.png" alt="Juggernaut" className="icon" /> Juggernaut</a>
      <a href="/builds/meleetank"><img src="/icons/meleetank-icon.png" alt="Melee Tank" className="icon" /> Melee-Tank Build</a>
      <a href="/builds/bow"><img src="/icons/bow-icon.png" alt="Bow Build" className="icon" /> Bow Build</a>
      <a href="/builds/ninjawakizashi"><img src="/icons/ninjawakizashi-icon.png" alt="Ninja Wakizashi" className="icon" /> Ninja-Wakizashi Build</a>
    </nav>
  </div>
);

export default Home;
