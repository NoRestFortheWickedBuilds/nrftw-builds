
import Image from 'next/image';
import '../../styles/build-style.css';

export default function MeleeTankBuild() {
  return (
    <div className="build-container">
      <h1>Melee-Tank Build</h1>
      <div className="gear-grid">
        <div className="gear-item">
          <Image src="/gear/tongue-splitter.png" alt="Tongue Splitter" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/clerics-mace.png" alt="Cleric's Mace" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/falsteads-barricade.png" alt="Falstead's Barricade" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/banes-skull-helm.png" alt="Bane's Skull Helm" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/banes-crested-armor.png" alt="Bane's Crested Armor" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/banes-coarse-legs.png" alt="Bane's Coarse Legs" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/stormwall-gauntlets.png" alt="Stormwall Gauntlets" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/thistle-ring.png" alt="Thistle Ring" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/feather-ring.png" alt="Feather Ring" width={64} height={64} title="See Full Stats" />
        </div>
        <div className="gear-item">
          <Image src="/gear/snake-ring.png" alt="Snake Ring" width={64} height={64} title="See Full Stats" />
        </div>
      </div>
    </div>
  );
}
