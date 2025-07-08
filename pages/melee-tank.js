export default function MeleeTank() {
  const gear = [
    { name: 'Tongue Splitter', image: '/gear/tongue-splitter.png', desc: 'Greatsword with 30% dmg vs large enemies' },
    { name: 'Fallstead’s Barricade', image: '/gear/falsteads-barricade.png', desc: 'Shield that restores focus on block' },
    { name: 'Stormwall Gauntlets', image: '/gear/stormwall-gauntlets.png', desc: 'Poise and Focus bonuses' },
    { name: 'Bane’s Skull Helm', image: '/gear/banes-skull-helm.png', desc: 'Stamina and Poise increases' },
    { name: 'Bane’s Crested Armor', image: '/gear/banes-crested-armor.png', desc: 'Heavy plate with Stagger resist' },
    { name: 'Bane’s Coarse Legs', image: '/gear/banes-coarse-legs.png', desc: 'Leg armor with +Max Stamina' },
    { name: 'Thistle Ring', image: '/gear/thistle-ring.png', desc: 'Focus regeneration ring' },
    { name: 'Feather Ring', image: '/gear/feather-ring.png', desc: 'Lightens equipment weight' },
    { name: 'Snake Ring', image: '/gear/snake-ring.png', desc: 'Grants poison resistance' }
  ];

  return (
    <div className="container">
      <h1>Melee Tank Build</h1>
      <div className="gear-grid">
        {gear.map((item, i) => (
          <div className="gear-slot" key={i}>
            <img src={item.image} alt={item.name} title={item.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}