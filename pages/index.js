
import React from 'react';

const Home = () => (
  <div className="landing-page">
    <div className="top-nav">
      <a href="#">Meta Builds</a>
      <a href="#">Leveling Guide</a>
      <a href="#">Tier List</a>
      <a href="#">My Builds</a>
      <a href="#">Build Planner</a>
      <a href="#">Map</a>
      <a href="#">Database</a>
    </div>
    <div className="header">
      <h1>WickedGuides</h1>
    </div>
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
